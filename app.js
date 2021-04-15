import Express from 'express';
import userRouter from './src/route/userRouter.js';
import loginRouter from './src/route/loginRouter.js';

import passport from 'passport'; // modulo
import session from 'express-session';
import cookieParser from 'cookie-parser';
import path from 'path';

// read static files 
global.__dirname = path.resolve('./'); // new  varaible dirname 




/* instancia de la aplicacion */
const app = new Express();

/*middleware*/
// app.use(Express.static(path.join(__dirname, 'public'))) // middleware STATIC FILES 
app.use(cookieParser()); // revisando si es necesario para algo o ayuda en algo 
app.use(session({ secret: 'cats' }));
app.use(passport.initialize()) // requeriminetto para google strategy passport
app.use(passport.session());
app.set("view engine","ejs");
app.set("views", __dirname + "/src/views");


/* incluye rutas */
app.use('/', loginRouter);
// app.use('/user/', userRouter); 
/*paginas renderizadas con ejs para manejar las rutas de login y ver data*/
app.get('/',(req,res)=>{
res.render('index',{hola:"prueba :D"})
})
app.get('/auth',(req,res)=>{
res.render('auth')
})
app.get('/myapp',(req,res)=>{
res.render('myapp')
})
app.get('*', (req,res)=>{
  res.render('404')
})



const port = 3000;
app.listen(port);
