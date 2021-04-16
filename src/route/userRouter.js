import express from 'express';
const userRouter =  express.Router(); // nueva instancia para rutas
import modelUser from '../model/modelUser.js';
import {isLogged} from '../middleware/authMiddlware.js';


// pagina bienvenida al logearse en mi app 
userRouter.get('/',isLogged,(req,res)=>{
  res.send(`que alegria ya estas registrado en mi app :D ${req.user.displayName}`)
  
})

// su perfil
userRouter.use('/todo',isLogged, (req, res) => {
  let result;
  modelUser.findAll().then((users) => {
      res.send('que alegria ya estas registrado en mi app :D')
  //  res.status( 200 ).json( users );
  });
});

export default userRouter

  