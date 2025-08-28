import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import DsaSheet from "./models/dsasheet.js"
import Problem from "./models/problems.js"
import { seedSheets ,seedSheetsWithIds,seedProblemsWithIds,problemDetails} from "./seed/data.js"
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

let count=0;
app.use(cors(corsOptions));
app.get('/',(req,res)=>{
  res.send("welcome codemates api")
})

app.get('/sheets', async (req, res) => {
  try {
    console.log("Fetched all sheets:");
    console.log(count++)
    const allsheets = await DsaSheet.find({});

    res.status(200).json(allsheets );
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets why' });
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
  await DsaSheet.deleteMany({})
    for(let i=0;i<seedSheetsWithIds.length;i++){
        const newSheet=new DsaSheet(seedSheetsWithIds[i]);
       await newSheet.save()
    }
    console.log("data seeded successfully")
}
const seedProblems_todb=async()=>{
    await Problem.deleteMany({})
    console.log("problems data deleted successfully")
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
// seedDb()
// deleteDb()
// seedProblems_todb()
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
