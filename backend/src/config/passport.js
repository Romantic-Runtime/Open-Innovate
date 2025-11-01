import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import GitHubStrategy from 'passport-github2';
import TwitterStrategy from 'passport-twitter';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import ProviderEnums from '../enum/provider-enum.js';
import { loginOrRegisterUser, verifyUserService } from '../services/auth-service.js';

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

//Local Strategy

passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    session:true
}, async(email,password,done)=>{
    try {
        const user=await verifyUserService(email,password);

        if(!user){
            return done(null,false,{message:"Invalid email or password"})
        }
        return done(null,user);
    } catch (error) {
        return done(error);
    }
}
))

//Google Strategy

passport.use(new GoogleStrategy.Strategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    // Use the backend callback URL (where Google should POST the auth code)
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope:['profile','email'],
    passReqToCallback:true
},async(req,accessToken,refreshToken,profile,done)=>{
    try {
        // Defensive parsing — passport-google-oauth2 can return profile fields
        // either on profile (profile.id, profile.emails, profile.photos) or in profile._json
        const googleId = profile?.id || profile?._json?.sub;
        const email = (profile?.emails && profile.emails[0] && profile.emails[0].value) || profile?._json?.email;
        const picture = (profile?.photos && profile.photos[0] && profile.photos[0].value) || profile?._json?.picture;

        console.log('Google profile raw:', profile);
        console.log('Resolved googleId:', googleId, 'email:', email);

        if (!googleId) {
            throw new Error('Google ID not found in profile');
        }

        const { user } = await loginOrRegisterUser({
            provider: ProviderEnums.GOOGLE,
            displayName: profile.displayName,
            providerId: googleId,
            picture: picture,
            email: email,
            accessToken: accessToken,
            refreshToken: refreshToken
        });

        done(null, user);
    } catch (error) {
        console.error('Error in Google Strategy:', error);
        done(error, null);
    }
}
))