import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import cors from "cors"
import ProblemsRoute from "./routes/problems.route.js"
import SheetsRoute from "./routes/sheet.route.js"
import UserRoute from "./routes/user.route.js"
import LLMRoute from "./routes/llm.route.js"
import passport from "passport"
import session from "express-session"
import MongoDBStore from "connect-mongo"
import "./config/passport.js";
dotenv.config({ quiet: true })



const app=express()


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