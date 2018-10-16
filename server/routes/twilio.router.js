const express = require('express');
const router = express.Router();
const axios = require('axios');

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getTwilioMessages', (req, res) => {
    console.log('twilio router /getTwilioMessages');
    
});


// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/sendTwilioMessage', (req, res) => {
    console.log('twilio router /sendTwilioMessage');
    
});
module.exports = router;