import express from "express"
import DsaSheet from "../models/dsasheet.model.js";
import passport from "passport";
const router = express.Router()

router.get('/sheets', async (req, res) => {
  try {
    const allsheets = await DsaSheet.find({});
    res.status(200).json(allsheets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sheets why' });
  }
})
router.post('/publishsheet', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { sheetname, author, myproblems, id } = req.body;

    if (!sheetname || !author || !myproblems) {
      return res.status(400).json({ message: "Missing required fields (sheetname, author, or problems)" });
    }
    const newSheet = new DsaSheet({
      id: id,
      sheetname: sheetname,
      author: author,
      problems: myproblems.map(p => ({
        id: p.id,
        problem_statement: p.problem_statement || p.title,
        link: p.link
      }))
    });

    await newSheet.save();

    return res.status(201).json({
      message: "Sheet published successfully",
      data: newSheet
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "A sheet with this name already exists." });
    }
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
});


export default router;