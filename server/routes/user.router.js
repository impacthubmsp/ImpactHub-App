const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const nodemailer = require("nodemailer");
const router = express.Router();
const Chance = require('chance');
const chance = new Chance();
const url = require('url');


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


router.put('/resetpw', (req, res) => {
  const username = req.body.username; // e-mail from the form
  const token = chance.hash(); // Create a unique token
  // TODO: Include an expiration 48 hours in the future
  let queryText = `UPDATE "person" SET "token" = $1 WHERE "username" = $2;`;
  pool.query(queryText, [token, username]).then((result) => {
    console.log(`http://localhost:3000/reset/${token}`); // TODO: Node mailer goes here && remove this line of code!!!!
    let resetLink = `http://localhost:3000/#/reset/${token}`;
    let url = `<a target="_blank" href="${resetLink}">Reset Password</a>`;

    const emailHtml = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link href="https://fonts.googleapis.com/css?family=UnifrakturMaguntia|Voltaire" rel="stylesheet">
    
        <title>Impact Hub MSP</title>
      </head>
      <body>
       
      <p>
      Click the link below to reset your password.
      ${url}
      </p>
      </body>
    </html>`


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
      to: username,
      subject: "Password Reset",
      text: "Reset Password" + resetLink,
      html: emailHtml
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
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
});




// when token is generated add it to mail. 
// create token
// put new toekn in db table
//send res.sendStatus(200)
//new pw view 
//send pw 

const email= [];
checkEmail = () => {
  axios({
    url: '/',
    method: 'GET'
}).then((response) => {
    const query = 'SELECT * FROM person;';
    pool.query(query).then(() => {
        //To-do limit the amount of data coming back
        for (let person of response.data) {
        email.push(person);
        }
        res.sendStatus(200);
    })
}).catch((error) => {
    console.log('error in member get look here: ', error);
})


}

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
