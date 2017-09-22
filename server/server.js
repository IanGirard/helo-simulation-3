const express = require ('express'),
      bodyParser = require ('body-parser'),
      massive = require ('massive'),
      session = require  ('express-session'),
      passport = require ('passport'),
      Auth0Strategy = require ('passport-auth0');
      require('dotenv').config();


const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING)
.then( db =>{
    app.set('db', db);
})


const port = 3030;
app.listen(port, () => console.log('listening on port: ', port))