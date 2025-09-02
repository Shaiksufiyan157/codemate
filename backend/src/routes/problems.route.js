import express from "express"

import Problem from "../models/problems.js";
const router =express.Router()
router.get('/problems',async(req,res)=>{
      try {
    const allProblems = await Problem.find({});
    res.status(200).json(allProblems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets' });
  }
})
router.post('/problem',async(req,res)=>{
    try{
            const problem=new Problem(req.body);
    await problem.save()
    console.log("working")
        res.status(200).json({
        good:'every thing working'
    })
    }catch(e){
        console.log("error",e)
    }

})
export default router;