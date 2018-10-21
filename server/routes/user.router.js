const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const nodemailer = require("nodemailer");
const router = express.Router();
const Chance = require('chance');
const chance = new Chance();



// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  console.log('req: ', req.body);
  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = 'INSERT INTO person (username, password) VALUES ($1, $2) RETURNING id';
  pool.query(queryText, [username, password])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});



  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.my_gmail_username,
        clientId: process.env.my_oauth_client_id,
        clientSecret: process.env.my_oauth_client_secret,
        refreshToken: process.env.my_oauth_refresh_token,
        accessToken: process.env.my_oauth_access_token
    }
  });


  const mail = {
    from: "sender@server.com",
    to: "vang.lais05@gmail.com",
    subject: "Password Reset",
    text: "Reset Password",
    // html: emailHtml
  }
  
  transporter.sendMail(mail, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        // see https://nodemailer.com/usage
        console.log("info.messageId: " + info.messageId);
        console.log("info.envelope: " + info.envelope);
        console.log("info.accepted: " + info.accepted);
        console.log("info.rejected: " + info.rejected);
        console.log("info.pending: " + info.pending);
        console.log("info.response: " + info.response);
    }
    transporter.close();
  });






// Existing user is reseting password, assumes username is an e-mail
router.put('/resetpw', (req, res) => {
  const username = req.body.username; // e-mail from the form
  const token = chance.hash(); // Create a unique token
  console.log(username);
  // TODO: Include an expiration 48 hours in the future
  let queryText = `UPDATE "person" SET "token" = $1 WHERE "username" = $2;`;
  pool.query(queryText, [token, username]).then((result) => {
    console.log(`http://localhost:3000/register/${token}`); // TODO: Node mailer goes here && remove this line of code!!!!
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
});



router.post('/create', (req, res) => {
  // This route should be protected. Only an Admin should
  // be able to create other users.
  if(req.isAuthenticated()) { // TODO: && is admin
    const token = chance.hash();
    let queryText = `INSERT INTO "person" ("username", "password", "token") 
                     VALUES ($1, '', $2);`;
    pool.query(queryText, [req.body.email, token]).then((result) => {
      console.log(`http://localhost:3000/register/${token}`); // TODO: Node mailer goes here && remove this line of code!!!!
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Error', error);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(401);
  }
});

router.put('/newpassword', (req, res) => {
  const password = encryptLib.encryptPassword(req.body.password);
  // Should probably validate e-mail or check token length. Limit to one?
  const queryText = `UPDATE "person" SET "password" = $1 WHERE "token" = $2 AND "username" = $3;`;
  pool.query(queryText, [password, req.body.token, req.body.username]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error', error);
    res.sendStatus(500);
  })
});


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
