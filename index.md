---
title: "Google-auth2 passportJS Nodejs"
path: blog/passportjs-nodejs
tags: [nodejs]
cover: ./security.jpeg
date: 2021-03-30
draw: true
excerpt: passportjs-nodejs
---
# usando PassportJS en NODE

- ## requerimientos instalacion

- listado packages npm
  - <pre>
    passport
    passport-google-oauth20
    </pre>
- complementos
  - [documentacion de passportJS](http://www.passportjs.org/packages/passport-google-oauth20/)  

- paso 1 en el proyecto
```
npm i passport passport-google-oauth20
```
- paso 2 en el navegador web
  1. ingresar a [Developer Console de Google](https://console.developers.google.com/)
  2. crear PROYECTO ejemplo **passportjs-practicaoauth2** 
  3. ingresa a **Credentials** y asegurate de tener seleccionado tu aplicacion
  4. ir a **CONFIGURAR PANTALLA DE CONSENTIMIENTO** O **CONFIGURE CONSENT SCREEN**
  5. Marcar opciones [User type : EXTERNAL] y "CREAR"
  6. asignar:
      a. nombre a la app **passportjs-practicaoauth2** 
      b. correo a la app para asistencias
      c. correo del developer y "Guardar y continuar"
  7. Regresar a **Credentials** e ir a **create credentials** selecciona **OAUTH client ID**
      a. selecciona tipo de aplicacion : "aplicacion web"
      b. nombre  **passportjs-practicaoauth2**
      c. URI de redireccionamiento autorizados : **http://localhost:3000/google/callback**
  8. Ahora recibes tus datos de acceso!
      a. tu ID CLIENTE: 416807314987-n43k7d1bqo7mbspglqsdqousk4vcfmhk.apps.googleusercontent.com
      b. tu ID secreto del CLIENTE: saXjPDAmNtVWVZfIEHxq3BRd

- paso 3 en el proyecto

new file authenticate.js en la raiz
```
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//import passport from 'passport'
//import GoogleStrategy from "passport-google-oauth20";
//const Google = GoogleStrategy.Strategy; 


/*serializacion de datos*/
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
/*basic configure*/
passport.use(new GoogleStrategy({
    clientID: "416807314987-n43k7d1bqo7mbspglqsdqousk4vcfmhk.apps.googleusercontent.com",
    clientSecret: "saXjPDAmNtVWVZfIEHxq3BRd",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      /*Usuario Registrados*/
      console.log(profile);
      cb(null,profile)

  }
));
```

en app.js importar 
```
var passport = require('passport')// necesario
//import passport from 'passport';
```
```
/*revisando passport*/
app.use(passport.initialize())
require('./authenticate');
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/google/callback',    passport.authenticate('google', {
      successRedirect: '/welcome',
      failureRedirect: '/failed',
    }));




 
```
probar alguna ruta 
ir a http://localhost:3000/google :D

# fin

# luego de login creado
**debe ser accesible solo para los que esten logeados**


1- crear MIDDLEWARE/proteccion check is logged or not
```
export function isLogged(req, res, next) { // revisa
  req.user ? next() : res.sendStatus(401); // revisa google trae usuario
}
```

2- usar sessions , npm i express-session
- key , inicializa , inicializa session 
```
app.use(session({ secret: 'boby' })); // set my session key
app.use(passport.initialize()); // session start
app.use(passport.session()); // session for passport
```
 




