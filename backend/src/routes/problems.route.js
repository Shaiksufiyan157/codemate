import express from "express"
import User from "../models/user.model.js";
import Problem from "../models/problems.model.js";
import passport from "passport";
const router = express.Router()

router.get('/problems', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const userid = req.user._id
    const userWithProblems = await User.findById(userid).populate('problems')
    const allProblems = userWithProblems.problems;
    res.status(200).json(allProblems);
  } catch (error) {
    res.status(500).json({ Problemsrror: 'Failed to fetch' });
  }
})

router.post('/problem', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const problem = new Problem(req.body);
    await problem.save()
    const userid = req.user._id
    const user = await User.findById(userid)
    let currentSize = user.problems.length;
    user.problems.push(problem._id)
    await user.save()
    currentSize = user.problems.length;
    res.status(200).json({
      good: 'every thing working',
      problem: problem
    })
  } catch (e) {
     res.status(40).json({
      error:e
    })
  }
})
router.put('/deleteproblem', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { id } = req.body;
    const problem = await Problem.findOneAndDelete({ id });

    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found' });
    }

    return res.status(200).json({ success: true, message: 'Problem deleted successfully', data: problem });

  } catch (error) {
    
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});
export default router;