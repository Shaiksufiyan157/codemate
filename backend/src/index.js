import express, { application, json } from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import DsaSheet from "./models/dsasheet.model.js"
import Problem from "./models/problems.model.js"
import User from "./models/user.model.js"
import { seedSheets ,seedSheetsWithIds,seedProblemsWithIds,problemDetails} from "./seed/data.js"
import cors from "cors"
import ProblemsRoute from "./routes/problems.route.js"
import SheetsRoute from "./routes/sheet.route.js"
import UserRoute from "./routes/user.route.js"
import passport from "passport"
import LocalStrategy from "passport-local"
import { OpenRouter } from '@openrouter/sdk';
import session from "express-session"
import MongoDBStore from "connect-mongo"
import addProblemToUser from "./utils/addprob.js"
import "./config/passport.js";
dotenv.config({ quiet: true })



const app=express()

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
  // defaultHeaders: {
  //   'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
  //   'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
  // },
});

app.use(express.json())
console.log("Starting Express app...");
console.log(process.env.FRONTEND_URL)
const corsOptions = {
   origin : [process.env.FRONTEND_URL,/^https:\/\/codemate-.*-shaiksufiyan157s-projects\.vercel\.app$/],
   methods:['GET','PUT','POST','DELETE'],
   allowedHeaders:["Content-Type","Authorization"],
   credentials:true
}
const mongoURI = process.env.DB_URI || 'mongodb://localhost:27017/mySessionsDB';
const store = MongoDBStore.create({
  mongoUrl: mongoURI,    // use mongoUrl, not uri
  collectionName: 'sessions',
});
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    store,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
let count=0;
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
  res.send("welcome to codemates api")
})



app.use(passport.initialize())
// app.use(passport.session())



app.use('/',ProblemsRoute)
app.use('/',SheetsRoute)
app.use('/',UserRoute)




const SYSTEM_INSTRUCTION = `
You are an intelligent coding assistant for the "Codemate" platform. Your task is to analyze code snippets and extract structured metadata into JSON format.

Output strictly valid JSON with no markdown formatting. Use this schema:

{
  "problem_statement": "The standard LeetCode/GFG title for this problem",
  "approach_1": "Concise explanation of the method used (include Time/Space complexity)",
  "approach_2": "A standard alternative approach (e.g., Brute Force or an optimization)",
  "ds": "Comma-separated list of Data Structures used",
  "algo": "Comma-separated list of Algorithms used",
  "link": "A link to the problem if identifiable, otherwise null",
  "code": "The input code, stripped of unnecessary whitespace but preserving logic"
}

Rules:
1. "approach_1" must describe the logic INSIDE the provided code.
2. Keep "ds" and "algo" short and tag-like.
3. Do not include markdown code blocks (like \`\`\`json) in the output.
`;









// const userCode = `class Solution {
// public:
//     ListNode* removeNthFromEnd(ListNode* head, int n) {
//         ListNode* temp=head;
//     ListNode* prev=nullptr;
//     int count=0;
//     if(head->next==NULL){
//         return NULL;
//     }
//     while(temp){
//         count++;
//         temp=temp->next;
//     }
//     if(count==n){
//         return head->next;
//     }
//     temp=head;
//     while(temp){
//         if(count--==n){
//             prev->next=prev->next->next;
//             delete temp;
//             break;
//         }
//         prev=temp;
//         temp=temp->next;
//     }
//     return head;
//     }
// };`;
// const userContext = `https://leetcode.com/problems/remove-nth-node-from-end-of-list/`;
// app.get('/gemini', async (req, res) => {
//   try {
// const stream = await openRouter.chat.send({
//   model: "nvidia/nemotron-3-nano-30b-a3b:free",
//   messages: [
//     // 3. INSERT THE SYSTEM PROMPT AS THE FIRST MESSAGE
//     {
//       role: "system",
//       content: SYSTEM_INSTRUCTION
//     },
//     // 4. INSERT THE USER DATA AS THE SECOND MESSAGE
//     {
//       role: "user",
//       content: `Extract details for this code:\n\n[CODE]\n${userCode}\n\n[CONTEXT]\n${userContext}`
//     }
//   ],
//   stream: true,
//   streamOptions: {
//     includeUsage: true
//   }
// });


// let fullResponse = "";

//   // 1. Accumulate the stream chunks
//   for await (const chunk of stream) {
//     const content = chunk.choices[0]?.delta?.content;
//     if (content) {
//       fullResponse += content;
//     }
//   }
// try {
//     // LLMs often wrap JSON in markdown (```json ... ```). We must remove that.
//     const cleanJson = fullResponse.replace(/```json|```/g, '').trim();
    
//     // Convert string to actual JavaScript Object
//     const jsonObject = JSON.parse(cleanJson);
    
//    res.json(jsonObject);

//   } catch (error) {
//     console.error("Failed to parse LLM response:", error);
//     // Fallback or error handling
//    res.send.json(error)
//   }
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

app.post("/ai",async (req,res)=>{
  // res.send("oeo")
  const {userCode,userContext}=req.body;

  try {
const stream = await openRouter.chat.send({
  model: "nvidia/nemotron-3-nano-30b-a3b:free",
  messages: [
    // 3. INSERT THE SYSTEM PROMPT AS THE FIRST MESSAGE
    {
      role: "system",
      content: SYSTEM_INSTRUCTION
    },
    // 4. INSERT THE USER DATA AS THE SECOND MESSAGE
    {
      role: "user",
      content: `Extract details for this code:\n\n[CODE]\n${userCode}\n\n[CONTEXT]\n${userContext}`
    }
  ],
  stream: true,
  streamOptions: {
    includeUsage: true
  }
});


let fullResponse = "";

  // 1. Accumulate the stream chunks
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      fullResponse += content;
    }
  }
try {
    // LLMs often wrap JSON in markdown (```json ... ```). We must remove that.
    const cleanJson = fullResponse.replace(/```json|```/g, '').trim();
    
    // Convert string to actual JavaScript Object
    const jsonObject = JSON.parse(cleanJson);
    
   res.json(jsonObject);

  } catch (error) {
    console.error("Failed to parse LLM response:", error);
    // Fallback or error handling
   res.send.json(error)
  }
  } catch (error) {
    console.error("LLM Error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
})





const seedDb=async()=>{
  await DsaSheet.deleteMany({})
    for(let i=0;i<seedSheetsWithIds.length;i++){
        const newSheet=new DsaSheet(seedSheetsWithIds[i]);
       await newSheet.save()
    }
    console.log("data seeded successfully")
}
const problemobjects=[]
const seedProblems_todb=async()=>{
    await Problem.deleteMany({})
    // console.log("problems data deleted successfully")
    for(let i=0;i<seedProblemsWithIds.length;i++){
        const newProblem=new Problem(seedProblemsWithIds[i]);
       await newProblem.save()
       problemobjects.push(newProblem._id)
    }
    console.log("problems data seeded successfully")
}
const deleteDb=async()=>{
   await DsaSheet.deleteMany({})
    console.log("data deleted successfully")
}
const addprobToUser=async()=>{
  // await addProblemToUser('697a52df47ae9c9bc9623fd7',seedProblemsWithIds)


  const allProblems=await Problem.find({})
  const user=await User.findById('697a52df47ae9c9bc9623fd7')
 if (user) {
    // 3. Extract only the IDs into a new array
    const problemIds = allProblems.map(prob => prob._id);

    // 4. Use the spread operator to push only the IDs
    user.problems.push(...problemIds);

    // 5. Save the changes to MongoDB Atlas
    await user.save();
    
    console.log("ObjectIds pushed successfully");
}

};
// seedDb()
// deleteDb()
// seedProblems_todb()
// addprobToUser()

const finduser=async()=>{
  const user=await User.findById('68c83fee885bef8e19d6fdb6')
  console.log("user",user)
  const problems=await User.findById('68c83fee885bef8e19d6fdb6').populate('problems')
  console.log("problems",problems)
}
// finduser()

const findProblem=async () => {
  const problem = await Problem.findById('68c83e11e48d0cc6895e7c93');
  console.log("problem", problem);
}
// findProblem()
const PORT=process.env.PORT


const startServer = async () => {
  try {
    await ConnectDB();  
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1); 
  }
};

startServer();
