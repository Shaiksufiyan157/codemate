import express from "express"
import User from "../models/user.model.js";
import passport from "passport";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).json({ user: req.user })
})
router.get("/dashboard", (req, res) => {
    res.send("welcome to dashboard page")
})
// router.post('/register',(req,res)=>{
//       const {email,password,username}=req.body
// try{
//     const user=new User({email,username});

//   User.register(user,password)
//   res.send("user register successfully")
// }
// catch(e){
//   res.send("error while user register",e)
//   console.log(e)
// }

// })
router.post('/signup', async (req, res) => {


    try {
    const { email, username, password } = req.body
    const user = new User({
        email: email,
        username: username,
        password: hashSync(password, 10)
    })
    const savedUser = await user.save();
    const payload = {
        username: savedUser.username,
        id: savedUser._id
    }

    const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
        res.status(201).send({
            success: true,
            message: "User created successfully.",
            token: token,
            username:savedUser.username
        })
    }
    catch (err) {
        res.status(409).send({
            success: false,
            message: "Something went wrong",
            error: err
        })
    }
})
router.post('/login', (req, res) => {
    // res.send("welcome to login page")
    try {
        User.findOne({ email: req.body.email }).then(user => {
            //No user found
            if (!user) {
                return res.status(401).send({
                    success: false,
                    message: "Could not find the user."
                })
            }


            if (!compareSync(req.body.password, user.password)) {
                return res.status(401).send({
                    success: false,
                    message: "Incorrect password or email"
                })
            }

            const payload = {
                username: user.username,
                id: user._id
            }

            const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
            // console.log(req.user)
            return res.status(200).send({
                success: true,
                message: "Logged in successfully!",
                token: "Bearer " + token,
                user:user
            })
        })
    } catch (e) {
        res.send(400).json({ message: "Login Failed", e })
    }
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: "you are in protected route" })
})


export default router