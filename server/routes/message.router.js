const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const twilio = require('twilio');

// This will get all messages left by members for the admin to see
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


// This will send messages to the admin from the member component
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

// this gets the current twilio settings from DB
router.get('/getTwilioSettings', (req, res) => {
    console.log('touchdown /getTwilioSettings');

    if (req.isAuthenticated) {
        // queries for single entries of member and returns each member
        const queryText = `SELECT * FROM "twilioLogin";`
        pool.query(queryText)
            .then(response => res.send(response.rows))
            .catch(error => res.sendStatus(500));
    } else {
        res.sendStatus(403);
    }
});

// This sends notifications to twilio
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

// Will delete all the rows in "twilioLogin" then replace with new person
router.post('/changeAdminTwilio', (req, res) => {
    if (req.isAuthenticated) {
        // queries for single entries of member and returns each member
        const queryText = `DELETE FROM "twilioLogin";`
        pool.query(queryText)
            .then(response => res.send(response.rows)).then(
                () => {
                    const queryText = `INSERT INTO "twilioLogin" ("admin_name", "phone_number")
                     VALUES ($1, $2);`
                    pool.query(queryText, [req.body.admin_name, req.body.phone_number])
                }
            )
            .catch(error => res.sendStatus(500));

    } else {
        res.sendStatus(403);
    }
});

// This sends notifications to twilio
router.delete('/clearTwilio', (req, res) => {
    if (req.isAuthenticated) {
        console.log('touchdown on /clearTwilio');
        // queries for single entries of member and returns each member
        const queryText = `DELETE FROM "twilioLogin";`
        pool.query(queryText)
            .then(message => console.log(message.sid))
            .catch(error => res.sendStatus(500));

    } else {
        res.sendStatus(403);
    }
});

module.exports = router;