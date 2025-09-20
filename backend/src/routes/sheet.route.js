import express from "express"
import DsaSheet from "../models/dsasheet.model.js";
const router=express.Router()



let count=0;
router.get('/sheets',async(req,res)=>{
      try {
    console.log("Fetched all sheets:");
    console.log(count++)
    const allsheets = await DsaSheet.find({});

    res.status(200).json(allsheets );
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets why' });
  }
})
// router.post()


export default router;