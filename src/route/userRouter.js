import express from 'express';
const userRouter =  express.Router(); // nueva instancia para rutas
import modelUser from '../model/modelUser.js';
import {isLogged} from '../middleware/authMiddlware.js';



// pagina bienvenida al logearse en mi app 
userRouter.get('/',isLogged,(req,res)=>{
res.render('myapp',{theUser:req.session.passport.user.displayName})
}) 

userRouter.use('/myprofile',isLogged, (req, res) => {
res.render('myprofile',{fullUser:req.session.passport.user})
  });



userRouter.use('/cosassql',(req,res)=>{
  res.send('aca van tus cosas sql :]')
   // let result;
  // modelUser.findAll().then((users) => {
  //  res.status( 200 ).json( users );
     // }
// );
})

export default userRouter


 