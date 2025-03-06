import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {prisma} from "./prismaConnect.js";
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
     async(accessToken, refreshToken, profile, done) => {
       try {
         let user =  await prisma.user.findOne({  googleId: profile.id });
         if (!user){
             user = await prisma.user.create({
                 googleId: profile.id,
                 name: profile.displayName,
                 email: profile.emails[0].value,      
             });
         }
          return done(null, user);
       }    catch (error) {
           done(error, null);
       } 
    })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);

})

export default passport;