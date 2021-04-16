import express from 'express';
import passport from 'passport'; // modulo
import  '../libs/authenticate-google.js'; // necesario para que podamos authenticar con google

const loginRouter = new express.Router(); // nueva instancia para rutas

/*Authenticate Requests*/
// What you will get in profile response ?
  //  provider
  //  id
  //  name
  //  displayName
  //  birthday
  //  relationship
  //  isPerson
  //  isPlusUser
  //  placesLived
  //  language
  //  emails
  //  gender
  //  picture
  //  coverPhoto

loginRouter.get('/google', passport.authenticate('google', { 
  scope: ['profile', 'email']
  
 } ))

loginRouter.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/user/',
  failureRedirect: '/google' 
  }))


loginRouter.get('/logout', (req,res)=>{
  req.logout();
  req.session.destroy()
  // req.session.destroy()
  res.send('bye!!');
})


export default loginRouter;