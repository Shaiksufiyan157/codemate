import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import DsaSheet from "./models/dsasheet.js"
import Problem from "./models/problems.js"
import { seedSheets ,seedSheetsWithIds,problemDetails} from "./seed/data.js"
import cors from "cors"
dotenv.config({ quiet: true })
const app=express()
console.log("Starting Express app...");
console.log(process.env.FRONTEND_URL)
const corsOptions = {
   origin : process.env.FRONTEND_URL,
   methods:['GET','PUT','POST','DELETE'],
   allowedHeaders:["Content-Type","Authorization"]
}

console.log(process.env.FRONTEND_URL)
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
  res.send("welcome codemates api")
})
console.log(process.env.FRONTEND_URL)
app.get('/sheets', async (req, res) => {
  try {
    console.log("Fetched all sheets:");
    const allsheets = await DsaSheet.find({});
    // console.log("Fetched all sheets:", allsheet);

    res.status(200).json({ allsheets });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets why' });
  }
});
console.log(process.env.FRONTEND_URL)
app.get('/test', async (req, res) => {
  try {
    // const allsheet =seedSheets;
    res.status(200).json(seedSheetsWithIds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets' });
  }
});
console.log(process.env.FRONTEND_URL)

app.get('/problems', async (req, res) => {
  try {
    const allProblems = await Problem.find({});
    res.status(200).json(allProblems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets' });
  }
});
console.log(process.env.FRONTEND_URL)
const seedDb=async()=>{
  await DsaSheet.deleteMany({})
    for(let i=0;i<seedSheetsWithIds.length;i++){
        const newSheet=new DsaSheet(seedSheetsWithIds[i]);
       await newSheet.save()
    }
    console.log("data seeded successfully")
}
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
console.log(process.env.FRONTEND_URL)
app.listen(PORT,()=>{
  console.log("something is not running")
  console.log(`server is running on port ${PORT}`)
  ConnectDB()
  console.log("listening on 3000")
})