const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
/**
 * GET route template
 */

//array of information to send to client
const memberArray = [];
//gets all members
router.get('/members', (req, res) => {
    axios({
        url: `https://impactdev.cobot.me/api/memberships`,
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        //To-do limit the amount of data coming back
        for (let member of response.data) {
            //create a new array of object parsing only information wanted
            memberArray.push({
                id: member.id,
                name: member.name,
                profile_picture: member.picture,
                company: member.address.company
            })
        }
        res.send(memberArray);
    }).catch((error) => {
        console.log('error in member get look here: ', error);
    })
});

//list of checked in members
router.get('/check-in', (req, res) => {
    axios({
        url: `https://impactdev.cobot.me/api/check_ins`,
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('error in check-in get look here: ', error);
    })
});

/**
 * POST route template
 */
//check a member in
//id of member
router.post('/', (req, res) => {
    axios({
        url: `/https://co-up.cobot.me/api/memberships/${idOfMember}/work_sessions`,
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('error in posting check-in, check here: ', error);
    })
});

module.exports = router;