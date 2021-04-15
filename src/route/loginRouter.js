import express from 'express';
import passport from 'passport'; // modulo
import  '../libs/authenticate-google.js'; // necesario para que podamos authenticar con google
import session from 'express-session'; //////////////////// extra para google
const loginRouter = new express.Router(); // nueva instancia para rutas

/*proteccion*/
function isLogged(req,res,next){
  req.user ? next(): res.sendStatus(401);
}
/*proteccion*/

/*rutas de lgin*/
// loginRouter.get('/',(req,res)=>{
//   res.send({welcome : 'bivenido'})
// });


loginRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

loginRouter.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/holaappp',
  failureRedirect: '/failure' 
  }))

loginRouter.get('/holaappp', isLogged ,(req,res)=>{
  res.send(`todo perfecto, binvenido ${req.user.displayName}`)
})


loginRouter.get('/failure', (req,res)=>{
  res.send('falla al logearse')
})

loginRouter.get('/logout', (req,res)=>{
  req.logout();
  req.session.destroy()
  // req.session.destroy()
  res.send('bye!!');
})


export default loginRouter;