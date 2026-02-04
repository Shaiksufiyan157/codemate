import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import cors from "cors"
import ProblemsRoute from "./routes/problems.route.js"
import SheetsRoute from "./routes/sheet.route.js"
import UserRoute from "./routes/user.route.js"
import LLMRoute from "./routes/llm.route.js"
import passport from "passport"
import { OpenRouter } from '@openrouter/sdk';
import session from "express-session"
import MongoDBStore from "connect-mongo"
import "./config/passport.js";
dotenv.config({ quiet: true })



const app=express()

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
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
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
  res.send("welcome to codemates api")
})



app.use(passport.initialize())

app.use('/',ProblemsRoute)
app.use('/',SheetsRoute)
app.use('/',UserRoute)
app.use('/',LLMRoute)



const SYSTEM_INSTRUCTION = `
You are a strict data processor for "Codemate". Your ONLY job is to validate input and extract metadata.

**STEP 1: CLASSIFY THE INPUT**
Analyze the raw user input and determine which category it falls into:

1.  **CATEGORY A: Valid Code Snippet**
    * Must look like actual programming code (C++, Java, Python, JS, etc.).
    * Must contain programming keywords (e.g., \`def\`, \`int\`, \`function\`, \`class\`, braces \`{}\`).
2.  **CATEGORY B: Valid Problem Link**
    * Must be a well-formed URL starting with \`http://\` or \`https://\`.
    * Must point to a known domain (e.g., leetcode.com, geeksforgeeks.org).
3.  **CATEGORY C: Invalid / Gibberish**
    * Random keystrokes (e.g., "asdfjkl", "hgsfd").
    * Conversational text with no code (e.g., "hello", "how are you").
    * Malformed URLs (e.g., "leetcode/two-sum" without https, "www.google").
    * Broken or incomplete code fragments that lack logic.

**STEP 2: EXECUTE BASED ON CATEGORY**

**IF CATEGORY C (Invalid):**
Output EXACTLY this JSON and nothing else:
{ "error": "Invalid input: Please provide a valid code snippet or a complete URL (starting with https://)." }

**IF CATEGORY A or B (Valid):**
Output strictly valid JSON with no markdown:
{
  "problem_statement": "The standard LeetCode/GFG title (inferred from logic or link)",
  "approach_1": "Concise explanation of the method (include Time/Space complexity)",
  "approach_2": "A standard alternative approach (e.g., Brute Force vs Optimization)",
  "ds": "Comma-separated list of Data Structures used",
  "algo": "Comma-separated list of Algorithms used",
  "link": "The URL if provided in input, otherwise null",
  "code": "The input code/text stripped of unnecessary whitespace"
}
`;


// app.post("/ai",async (req,res)=>{
//   const {userCode,userContext}=req.body;

//   try {
// const stream = await openRouter.chat.send({
//   model: "nvidia/nemotron-3-nano-30b-a3b:free",
//   messages: [
//     {
//       role: "system",
//       content: SYSTEM_INSTRUCTION
//     },
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

//   for await (const chunk of stream) {
//     const content = chunk.choices[0]?.delta?.content;
//     if (content) {
//       fullResponse += content;
//     }
//   }
// try {
//     const cleanJson = fullResponse.replace(/```json|```/g, '').trim();
//     const jsonObject = JSON.parse(cleanJson);
//   // if(jsonObject["error"]) res.send()
//    res.json(jsonObject);

//   } catch (error) {
//    res.send.json(error)
//   }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// })


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