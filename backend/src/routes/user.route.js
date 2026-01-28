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

router.post('/signup', async (req, res) => {


    try {
    const { email, username, password } = req.body
    const user = new User({
        email: email,
        username: username,
        password: hashSync(password, 10)
    })
    await user.save()
    const payload = {
        username:user.username,
        id:user._id
    }
     const UserFound={
                username:user.username,
                email:user.email
            }
    const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
        res.status(201).send({
            success: true,
            message: "User created successfully.",
            token:"Bearer " + token,
            username:UserFound
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
router.post('/login',async (req, res) => {
    // res.send("welcome to login page")
    try {
       const user=await User.findOne({ email: req.body.email })
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
            const UserFound={
                username:user.username,
                email:user.email
            }

            const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
            // console.log(req.user)
            return res.status(200).send({
                success: true,
                message: "Logged in successfully!",
                token: "Bearer " + token,
                user:UserFound
            })
        
    } catch (e) {
        res.status(400).send({ message: "Login Failed", e })
    }
});

// router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.json({ message: "you are in protected route" })
// })

router.get('/me', async (req, res) => {
    // 1. Get the header
    const authHeader = req.headers['authorization'];
    
    // 2. Check if header exists
    if (!authHeader) {
        return res.status(401).send({ success: false, message: "Access Denied: No Token Provided!" });
    }

    // 3. Extract the token (Remove "Bearer " if present)
    // The client sends: "Bearer <token_string>"
    const token = authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).send({ success: false, message: "Access Denied: Malformed Token!" });
    }

    try {
        // 4. Verify the token using your secret key
        // "Random string" MUST match what you used in login/signup
        const decoded = jwt.verify(token, "Random string");

        // 5. Find the user by the ID inside the decoded token
        // We use .select("-password") to ensure the password hash isn't sent back
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found." });
        }

        // 6. Send the user data
        res.status(200).send({
            success: true,
            user: user
        });

    } catch (error) {
        // This handles expired tokens or invalid signatures
        res.status(400).send({ success: false, message: "Invalid Token", error: error.message });
    }
});
export default router