require('dotenv').config();

const express = require ('express'),
      bodyParser = require ('body-parser'),
      massive = require ('massive'),
      session = require  ('express-session'),
      passport = require ('passport'),
      Auth0Strategy = require ('passport-auth0');


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

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
},function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    // console.log(profile)
    db.get_robot([profile.identities[0].user_id]).then( user => {
        if(user[0]) {
            done(null, user[0].id)
        } else {
            db.create_robot([profile.emails[0].value, 
             profile.identities[0].user_id]).then(user => { //took out profile.picture
                done(null, user[0].id)
            })
        }
 
    })
}
))

passport.serializeUser(function(userId, done) {
    console.log('serialize', userId);
    done(null, userId);
})

passport.deserializeUser(function(userId, done) {
    app.get('db').current_robot([userId]).then (user =>{
        console.log('deserialize', userId);
    done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}))

app.get('/auth/user', (req, res) => {
    if(!req.user) {
        return res.status(404).send('User not found');
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    console.log('hello');
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
})


const port = 3030;
app.listen(port, () => console.log('listening on port: ', port))