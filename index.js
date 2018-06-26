const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {googleClientID, googleClienteSecret} = require('./config/keys.js')
const app = express();

// clientID 349506072031-gk5s2o71421bsmnran5r4vma76lo8d5k.apps.googleusercontent.com
// clienteSecret 12kUP-dtaUdemLya77uhe-vg
passport.use(new GoogleStrategy(
  {
    clientID: googleClientID,
    clienteSecret: googleClienteSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken) => {
  console.log(accessToken);
  }
));

app.get('/auth/google',
        passport.authenticate('google', {
          scope: ['profile','email']
        })
);

app.get('/auth/google/callback', (req,res) => {

});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
