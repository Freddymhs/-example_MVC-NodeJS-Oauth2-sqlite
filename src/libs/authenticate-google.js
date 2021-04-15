// var passport = require('passport')
import passport from 'passport'
import GoogleStrategy from "passport-google-oauth20";
const Google = GoogleStrategy.Strategy; 
let passportGoogle = passport;

/*serializacion de datos*/
passportGoogle.serializeUser(function(user, done) {
  done(null, user);
});

passportGoogle.deserializeUser(function(user, done) {
  done(null, user);
});
/*basic configure*/
passportGoogle.use(new Google({
    clientID: "416807314987-n43k7d1bqo7mbspglqsdqousk4vcfmhk.apps.googleusercontent.com",
    clientSecret: "saXjPDAmNtVWVZfIEHxq3BRd",
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request,accessToken, refreshToken,profile,done){
      return done(null,profile)  
  }
));

export default passportGoogle;