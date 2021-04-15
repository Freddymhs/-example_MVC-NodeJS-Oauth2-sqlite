import express from 'express';
const userRouter =  express.Router(); // nueva instancia para rutas
import modelUser from '../model/modelUser.js';

userRouter.get('/',(req,res)=>{
  res.send('que alegria ya estas registrado en mi app :D')
})
userRouter.use('/todo', (req, res) => {
  let result;
  modelUser.findAll().then((users) => {
   res.status( 200 ).json( users );
  });
});

export default userRouter