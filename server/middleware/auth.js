const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // req.cookies
  // run debugger
  // debugger;
  req.session = {};
  debugger;
  if (Object.keys(req.cookies).length > 0) {
    for (let key of req.cookies) {
      models.Sessions.get({hash: req.cookies[key]})
        .then((userInfo) => {
          if (userInfo) {
            debugger;
            // assign an object to a session property on the request that contains relevant user information.
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    models.Sessions.create()
      .then((results) => {
        console.log('------------------');
        console.log(results);
        models.Sessions.get({id: result.insertId})
          .then((result) => {
            /////////////////
            /////////////////
            // doesn't seem like hash key is being set
            req.session.hash = result.hash;
          });

        // debugger;
        // req.session = results.hash;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  next();
  // models.Sessions.get({hash: req.cookies[1]});
  // {shortly: 'bigasshash', john: 'biggasshash2', mo: 'bigassHash3'};
};

// set cookies after this?

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/



// In middleware/auth.js,
// write a createSession middleware function that accesses the parsed cookies on the request,
// looks up the user data related to that session,
// req.session: {hash: `ourSessionHash`}
// and assigns an object to a session property on the request that contains relevant user information.
// (Ask yourself: what information about the user would you want to keep in this session object?)
