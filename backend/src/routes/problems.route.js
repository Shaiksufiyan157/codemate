import express from "express"
import User from "../models/user.model.js";
import Problem from "../models/problems.model.js";
import passport from "passport";
const router =express.Router()
let count=0;
router.get('/problems',passport.authenticate('jwt', { session: false }),async(req,res)=>{
      try {
        const userid=req.user._id
        const userWithProblems = await User.findById(userid).populate('problems');
        const allProblems = userWithProblems.problems;
         ++count;
    console.log(count)
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
    let currentSize=user.problems.length;
    console.log("current length",currentSize)
    user.problems.push(problem._id)
    await user.save()
    currentSize=user.problems.length;
    console.log("after length",currentSize)
   
    console.log("working")
        res.status(200).json({
        good:'every thing working',
        problem:problem
    })
    }catch(e){
        console.log("error",e)
    }

    // res.send({user:req.user})

})
export default router;