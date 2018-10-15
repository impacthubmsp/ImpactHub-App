const express = require('express');
const router = express.Router();
const axios = require('axios');

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getList', (req, res) => {
    axios({
        url: `https://us19.api.mailchimp.com/3.0/lists/4199edf633/members`,
        method: 'GET',
        headers: { Authorization: `user ${process.env.APIKEY}` }
    }).then((response) => {
        console.log(response.data);
        res.send(response.data)
    }).catch((error) => {
        console.log('error in /getList: ', error);
    })
});


// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/addVisitor', (req, res) => {
    let userToAdd = {
        "email_address": "hello@jclarkworks.com",
        "status": "subscribed",
        "merge_fields": {
            "FNAME": "Jakeh",
            "LNAME": 'Clark',
            "PHONE": "2146776670",
        }
    }
    axios({
        url: `https://us19.api.mailchimp.com/3.0/lists/4199edf633/members`,
        method: 'POST',
        headers: { Authorization: `user ${process.env.APIKEY}` },
        data: userToAdd,
    }).then((response) => {
        console.log(response.data);
        res.sendStatus(200)
    }).catch((error) => {
        console.log('error in /addVisitor: ', error);
    })
});
module.exports = router;