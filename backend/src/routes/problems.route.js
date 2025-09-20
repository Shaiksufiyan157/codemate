import express from "express"
import User from "../models/user.model.js";
import Problem from "../models/problems.model.js";
import passport from "passport";
const router =express.Router()
router.get('/problems',passport.authenticate('jwt', { session: false }),async(req,res)=>{
      try {
        const userid=req.user._id
           const userWithProblems = await User.findById(userid).populate('problems');
        const allProblems = userWithProblems.problems;
    res.status(200).json(allProblems);
  } catch (error) {
    res.status(500).json({ Problemsrror: 'Failed to fetch' });
  }
  // res.send({user:req.user})
})
router.post('/problem',passport.authenticate('jwt', { session: false }),async(req,res)=>{
    try{
    const problem=new Problem(req.body);
    await problem.save()
    const userid=req.user._id
    const user=await User.findById(userid)
    user.problems.push(problem._id)
    await user.save()
    console.log("working")
        res.status(200).json({
        good:'every thing working'
    })
    }catch(e){
        console.log("error",e)
    }

    // res.send({user:req.user})

})
export default router;