import passport from "passport";
// import { compareSync } from "bcrypt";
// import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.model.js";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Random string';


passport.use(
    new JwtStrategy(opts,async(jwt_payload,done)=>{
        try{
            // console.log("JWT payload:", jwt_payload);
            const user=await User.findById(jwt_payload.id);
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        }catch(e){
            return done(e,false);
        }
    })
)