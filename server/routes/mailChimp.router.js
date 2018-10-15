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
        console.log('error in mail get look here: ', error);
    })
});


// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/post', (req, res) => {
    let userToAdd = {

    }

    axios({
        url: `https://us19.api.mailchimp.com/3.0/lists/4199edf633/members`,
        method: 'POST',
        headers: { Authorization: `user ${process.env.APIKEY}` },
        body: userToAdd,
    }).then((response) => {
        console.log(response.data);
        res.send(response.data)
    }).catch((error) => {
        console.log('error in mail get look here: ', error);
    })
});
module.exports = router;