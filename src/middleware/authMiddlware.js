import session from 'express-session'; // borrarme

export function isLogged(req,res,next){
  console.log(req.session.passport.user)
  req.user ? next(): res.sendStatus(401);
}
