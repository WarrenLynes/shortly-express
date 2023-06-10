const models = require('../models');
const Promise = require('bluebird');

// check for a sessionID
// check for a cookie
// render
//// login || index
module.exports.authenticate = (req, res, next) => {
  const authenticated = false;

  // parseCookies(req, res); we prob dont need this here

  if (!authenticated) {
    res.render('login');
  } else {
    next();
  }
};

// The user either logged in or signed up, now a session cookie needs to be created
module.exports.createSession = (req, res, next) => {
  // call parseCookies();
  //no cookies in request
  // generate new session
  // create unique hash and store in database
  // set hash as cookie in response
  // if cookie exists
  //if valid: do something
  //if not valid: do something else
};

