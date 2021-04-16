import express from 'express';
import passport from 'passport'; // modulo
import  '../libs/authenticate-google.js'; // necesario para que podamos authenticar con google
import session from 'express-session'; //////////////////// extra para google
const loginRouter = new express.Router(); // nueva instancia para rutas

/*proteccion*/

loginRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

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