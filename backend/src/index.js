import express from "express"
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
// import 
import session from "express-session"
import MongoDBStore from "connect-mongo"
import addProblemToUser from "./utils/addprob.js"
import "./config/passport.js";
dotenv.config({ quiet: true })
const app=express()



app.use(express.json())
console.log("Starting Express app...");
console.log(process.env.FRONTEND_URL)
const corsOptions = {
   origin : process.env.FRONTEND_URL,
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
  res.send("welcome codemates api")
})



app.use(passport.initialize())
// app.use(passport.session())



app.use('/',ProblemsRoute)
app.use('/',SheetsRoute)
app.use('/',UserRoute)

const seedDb=async()=>{
  await DsaSheet.deleteMany({})
    for(let i=0;i<seedSheetsWithIds.length;i++){
        const newSheet=new DsaSheet(seedSheetsWithIds[i]);
       await newSheet.save()
    }
    console.log("data seeded successfully")
}
const seedProblems_todb=async()=>{
    await Problem.deleteMany({})
    // console.log("problems data deleted successfully")
    for(let i=0;i<seedProblemsWithIds.length;i++){
        const newProblem=new Problem(seedProblemsWithIds[i]);
       await newProblem.save()
    }
    console.log("problems data seeded successfully")
}
const deleteDb=async()=>{
   await DsaSheet.deleteMany({})
    console.log("data deleted successfully")
}
const addprobToUser=async()=>{
  await addProblemToUser('68c83fee885bef8e19d6fdb6',seedProblemsWithIds)
  console.log("problems added to user")
}
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
