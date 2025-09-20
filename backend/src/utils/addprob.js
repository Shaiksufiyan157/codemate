import User from "../models/user.model.js";
import Problem from "../models/problems.model.js";

async function addProblemToUser(userId, problemData) {
    console.log(userId)
    // console.log(problemData[0])
  try {
    const newProblem = new Problem(problemData[1]); // if problemData is an array
    const savedProblem = await newProblem.save();
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.problems.push(savedProblem._id);
    await user.save();
    console.log('Problem added successfully');
  } catch (err) {
    console.error('Error adding problem:', err);
  }
}
export default addProblemToUser;