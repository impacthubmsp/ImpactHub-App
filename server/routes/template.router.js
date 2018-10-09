const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
/**
 * GET route template
 */

//array of information to send to client
//gets all members
router.get('/', (req, res) => {
    axios({
        url: `https://impactdev.cobot.me/api/memberships`,
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        //To-do limit the amount of data coming back
        for (let member of response.data) {
            //create a new array of object parsing only information wanted
            const queryText = `INSERT INTO "members" ("name", "company", "img_url", "cobot_id")
            VALUES ($1, $2, $3, $4)`;
            pool.query(queryText, [member.name, member.address.company, member.picture, member.id])
        }
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
        url: `/https://impactdev.cobot.me/api/memberships/${idOfMember}/work_sessions`,
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('error in posting check-in, check here: ', error);
    })
});

router.get('/members', (req, res) => {
    // queries for single entries of member and returns each member
    const queryText =`SELECT cobot_id, name, company, img_url FROM (SELECT cobot_id, name, company, img_url, ROW_NUMBER() OVER 
  (PARTITION BY (name) ORDER BY name DESC) AS rn
     FROM members
    ) tmp WHERE rn = 1;`
    pool.query(queryText)
    .then(response => res.send(response.rows))
     .catch(error => res.sendStatus(500));
});


//delete request to API does not delete member for the day just checks them out on cobot
router.delete('/')

module.exports = router;