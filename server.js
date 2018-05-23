

var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwtAuthz = require('express-jwt-authz');
var jwksRsa = require('jwks-rsa');
var PORT = process.env.PORT || 3000;
var user = require('./routes/user.js');
var index = require('./routes/index.js');
var checkJwt = jwt({

  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://project-2.auth0.com/.well-known/jwks.json`
  }),


  audience: process.env.AUTH0_CLIENT_ID,
  issuer: `https://project-2.auth0.com/`,
  algorithms: ['RS256']
});
app.use( user);
app.use(index);
app.listen(PORT, function() {
  console.log("App listening at PORT " + PORT)
})
