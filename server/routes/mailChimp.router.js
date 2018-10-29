const express = require('express');
const router = express.Router();
const axios = require('axios');

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getList', (req, res) => {
    if (req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});


// This request will post the new user to the email list
// Modify the list id to change for impacthub's api
router.post('/addVisitor', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('addVisitor to add', req.body);
        axios({
            url: `https://us19.api.mailchimp.com/3.0/lists/4199edf633/members`,
            method: 'POST',
            headers: { Authorization: `user ${process.env.APIKEY}` },
            data: req.body,
        }).then((response) => {
            console.log(response.data);
            res.sendStatus(200)
        }).catch((error) => {
            console.log('error in /addVisitor: ', error);
        })
    } else {
        res.sendStatus(403);
    }
});
module.exports = router;