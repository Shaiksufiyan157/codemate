import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js"
import DsaSheet from "./models/dsasheet.js"
import Problem from "./models/problems.js"
import { dsasheetdata } from "../../frontend/src/db/index.js"
import { seedSheets ,seedProblems} from "./seed/data.js"
// import

dotenv.config()

const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({
        "name":"shaik sufiyan"
    })
})

app.get('/sheets', async (req, res) => {
  try {
    const allsheet = await DsaSheet.find({});
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
    DsaSheet.deleteMany({})
    for(let i=0;i<3;i++){
        const newSheet=new DsaSheet(seedSheets[i]);
        newSheet.save()
    }
    console.log("data seeded successfully")
}
const seedProblems_todb=async()=>{
    Problem.deleteMany({})
    for(let i=0;i<3;i++){
        const newProblem=new Problem(seedProblems[i]);
        newProblem.save()
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
console.log(PORT)

app.listen(PORT,()=>{
    ConnectDB()
    console.log(`serving on port ${PORT}`)
})