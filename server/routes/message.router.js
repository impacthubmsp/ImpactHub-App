const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const twilio = require('twilio');

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getMessages', (req, res) => {
    if (req.isAuthenticated) {
        // queries for single entries of member and returns each member
        const queryText = `SELECT * FROM "messages" ORDER BY date_time DESC LIMIT 15;`
        pool.query(queryText)
            .then(response => res.send(response.rows))
            .catch(error => res.sendStatus(500));
    } else {
        res.sendStatus(403);
    }
});


// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/sendMessage', (req, res) => {
    if (req.isAuthenticated) {
        const queryText = `INSERT INTO "messages" ("body", "cobot_id", "sender_name")
        VALUES ($1, $2, $3)`;
        pool.query(queryText, [req.body.body, req.body.cobot_id, req.body.sender_name])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('/sendMessage POST Failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/notifyTwilio', (req, res) => {
    if (req.isAuthenticated) {
        console.log('touchdown on /notifyTwilio');

        const accountSid = process.env.TwilioSID;
        const authToken = process.env.TwilioAuth;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: 'Someone needs you at the front desk!',
                from: '+16125090746',
                to: '+12146776670'
            })
            .then(message => console.log(message.sid))
            .done();

    } else {
        res.sendStatus(403);
    }
});

module.exports = router;