const express = require('express');
const router = express.Router();
const axios = require('axios');

// This request will retrieve all the members inside of the "interested in membership" list.
// Modify the list id to change for impacthub's api
router.get('/getList', (req, res) => {
    axios({
        url: `https://us19.api.mailchimp.com/3.0/lists/${process.env.ListID}/members`,
        /* The url above is what coordinates with Github to get member information 
        of the Mailchimp list. The variable after /lists/ is the list ID. If you need to 
        change the list these members are being directed to, you can update this variable i
        in the .env file
         */
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
    console.log('addVisitor to add', req.body);
    axios({
    url: `https://us19.api.mailchimp.com/3.0/lists/${process.env.ListID}/members`, 
    /* The url above is what coordinates with Github to send new member information 
    to the mailchimp list. The variable after /lists/ is the list ID. If you need to 
    change the list these members are being directed to, you can update this variable i
    in the .env file
     */
        method: 'POST',
        headers: { Authorization: `user ${process.env.APIKEY}` },
        data: req.body,
    }).then((response) => {
        console.log(response.data);
        res.sendStatus(200)
    }).catch((error) => {
        console.log('error in /addVisitor: ', error);
    })
});
module.exports = router;