const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getTwilioMessages', (req, res) => {
    if (req.isAuthenticated) {
        // queries for single entries of member and returns each member
    const queryText =`SELECT * FROM "twilio" ORDER BY date_time DESC LIMIT 15;`
      pool.query(queryText)
      .then(response => res.send(response.rows))
       .catch(error => res.sendStatus(500));
    } else {
        res.sendStatus(403);
    }
});


// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/sendTwilioMessage', (req, res) => {
    console.log('twilio router /sendTwilioMessage');
    
});
module.exports = router;