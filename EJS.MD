npm i ejs

```
// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')
app.use('/',require('./routes/news'))
app.set('views','./views')
```

# tutorial :D
```
import path from 'path';
global.__dirname = path.resolve('./'); // new  varaible dirname 
```


- instala ejs
npm i ejs
- usa plantilla ejs
app.set("view engine","ejs");
app.set("views", __dirname + "pathhacia/views");
- renderizar
app.get('/',(req,res)=>{
res.render('index',{hola:"prueba :D"})
})
