import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import DsaSheet from "./models/dsasheet.js"
import Problem from "./models/problems.js"
import { seedSheets ,problemDetails} from "./seed/data.js"
import cors from "cors"
import serverless from "serverless-http"
dotenv.config({ quiet: true })
// console.log(process.env.FRONTEND_URL)
const app=express()
console.log("Starting Express app...");

const corsOptions = {
   origin : process.env.FRONTEND_URL,
   methods:['GET','PUT','POST','DELETE'],
   allowedHeaders:["Content-Type","Authorization"]
}


app.use(cors(corsOptions));
app.get('/',(req,res)=>{
  res.send("welcome codemates api")
})

app.get('/sheets', async (req, res) => {
  try {
    const allsheet =seedSheets;
    res.status(200).json(allsheet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets' });
  }
});
app.get('/problems', async (req, res) => {
  try {
    const allProblems = await Problem.find({});
    res.status(200).json(allProblems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets' });
  }
});
const seedDb=async()=>{
    for(let i=0;i<3;i++){
        const newSheet=new DsaSheet(seedSheets[i]);
       await newSheet.save()
    }
    console.log("data seeded successfully")
}
// console.log(problemDetails.length)
const seedProblems_todb=async()=>{
    for(let i=0;i<problemDetails.length;i++){
        const newProblem=new Problem(problemDetails[i]);
       await newProblem.save()
    }
    console.log("problems data seeded successfully")
}
const deleteDb=async()=>{
   await DsaSheet.deleteMany({})
    console.log("data deleted successfully")
}
// seedDb()
// deleteDb()
// seedProblems_todb()
const PORT=process.env.PORT
// const data=DsaSheet.findOne({_id:'68ab54767fe164993f09c827'});
// console.log(data)

// ConnectDB()
//   .then(() => console.log("Database connected"))
//   .catch(err => console.error("DB connection error:", err));


// export default serverless(app);
app.listen(PORT,()=>{
  ConnectDB()
  console.log("listening on 3000")
})