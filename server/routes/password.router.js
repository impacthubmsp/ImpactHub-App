const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const nodemailer = require("nodemailer");
const router = express.Router();
const Chance = require('chance');
const chance = new Chance();
const moment = require('moment');



router.get('/:emailAddress', (req, res) => {
    console.log('check for email:', req.params.emailAddress);
  
    const email = req.params.emailAddress;
    console.log('email', email);
  
    const queryText = `SELECT "id" FROM person WHERE "username" = $1;`;
  
    pool.query(queryText, [email])
        .then((results) => {
            console.log('results', results.rows.length);
            if (results.rows.length >= 1) {
                //call function to send email
                resetPersonInviteCode(email);
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        })
        .catch((error) => {
            console.log('error finding email:', error);
            res.sendStatus(404);
        });
  });




  resetPersonInviteCode =  (email) => {
    const token = chance.hash(); // Create a unique token
    // TODO: Include an expiration 48 hours in the future
  let date = new Date();
    date = moment().add('days', 2); 
  
         let resetPasswordCode = token;
    
         console.log(date);
         
  
    let queryText = `UPDATE "person" SET "token" = $1,"expiration" = $3 WHERE "username" = $2;`;
    pool.query(queryText, [token, email, date]).then((result) => {
      console.log(`http://localhost:3000/reset/${resetPasswordCode}`); // TODO: Node mailer goes here && remove this line of code!!!!
      let resetLink = `http://localhost:3000/#/reset/${resetPasswordCode}`;
      let url = `<a target="_blank" href="${resetLink}">Reset Password</a>`;
  
      const emailHtml = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <link href="https://fonts.googleapis.com/css?family=UnifrakturMaguntia|Voltaire" rel="stylesheet" />
      
          <title>Impact Hub MSP</title>
        </head>
        <body>
          <p>Click the link below to reset your password. ${url}</p>
        </body>
      </html>
      `
  
  
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
        to: email,
        subject: "Password Reset",
        text: "Reset Password" + resetLink,
        html: emailHtml
      }
      
      transporter.sendMail(mail, function(err, info) {
        if (err) {
            console.log('here is nodemailer', err);
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
   
    });
  }


//post route for new password / resetting password
router.put('/newpassword', (req, res) => {
    console.log(req.body);
    
    const password = encryptLib.encryptPassword(req.body.password);
    // Should probably validate e-mail or check token length. Limit to one?
    const queryText = `UPDATE "person" SET "password" = $1 WHERE "token" = $2;`;
    pool.query(queryText, [password, req.body.token]).then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log('Error', error);
      res.sendStatus(500);
    })
  });



module.exports = router;
