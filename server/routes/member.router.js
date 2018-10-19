const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');



router.get('/', (req, res) => {
    axios({
        url: `https://impactdev.cobot.me/api/memberships`,
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        const queryDel = 'DELETE FROM "members";';
        pool.query(queryDel).then(() => {
            //To-do limit the amount of data coming back
            for (let member of response.data) {
                //create a new array of object parsing only information wanted
                const queryText = `INSERT INTO "members" ("name", "company", "img_url", "cobot_id")
            VALUES ($1, $2, $3, $4)`;
                pool.query(queryText, [member.name, member.address.company, member.picture, member.id])
            }
            res.sendStatus(200);
        })
    }).catch((error) => {
        console.log('error in member get look here: ', error);
    })
});

router.get('/list', (req, res) => {
    // queries for single entries of member and returns each member
    const queryText = `SELECT cobot_id, name, company, img_url FROM (SELECT cobot_id, name, company, img_url, ROW_NUMBER() OVER 
  (PARTITION BY (name) ORDER BY name DESC) AS rn
     FROM members
    ) tmp WHERE rn = 1;`
    pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => res.sendStatus(500));
});

router.get('/checkedin', (req, res) => {

    // let name = memberStatus.single.value.slice(32)
    // queries for checked in or checked out members
    const queryText = `SELECT DISTINCT ON (cobot_id) * FROM checkin WHERE member = true AND day = CURRENT_DATE AND checked_in = TRUE;`;
    pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => res.sendStatus(500));
});
//specifically for townhall view-- needs image url and company name
router.get('/townhall', (req, res) => {

    // let name = memberStatus.single.value.slice(32)
    // queries for checked in or checked out members
    const queryText = `SELECT DISTINCT ON ("checkin"."name") "checkin"."cobot_id", "checkin"."name", "members"."company", "members"."img_url"
                        FROM "checkin" 
                        JOIN "members" ON "checkin"."cobot_id" = "members"."cobot_id"
                        WHERE "member" = true AND "day" = CURRENT_DATE AND "checked_in" = TRUE;`;
    pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => res.sendStatus(500));
});




//POST route will login members to "checkin" 
//To be used in conjunction with an API call to CoBot
//Required minimum req.body object format {name:'', member:true, purpose:'', cobot_id:''}
router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const membCheckIn = req.body;
        let member = true;
        let id = membCheckIn.single.value.slice(0, 32)
        let name = membCheckIn.single.value.slice(32)
        console.log(membCheckIn);
        postCheckin(id);
        const queryText = `INSERT INTO "checkin" ("day", "time", "name", "member","purpose", "cobot_id") 
                            VALUES ($1, $2, $3, $4, $5, $6);`;
        pool.query(queryText, [membCheckIn.day, membCheckIn.time, name, member, membCheckIn.purpose, id])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Member Checkin POST Failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});
postCheckin = (id) => {
    axios({
        url: `https://impactdev.cobot.me/api/memberships/${id}/work_sessions`,
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log('error in posting check-in, check here: ', error);
    })
}

memberCheckout = (id) => {
    axios({
        url: `https://impactdev.cobot.me/api/memberships/${id}/check_ins/current`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${process.env.myKey}` }
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log('error in posting check-in, check here: ', error);
    })
}
//PUT route will switch "checkin.checked-in" from 'true' to 'false'.
//To be used in conjunction with an API call to CoBot.
//Required minimum req.body object format {checkout:false, name:'', cobot_id:''}
router.put('/', (req, res) => {
    if (req.isAuthenticated) {
        const membCheckOut = req.body;
        let id = membCheckOut.single.value.slice(0, 32)
        console.log(membCheckOut, id);
        memberCheckout(id);
        const queryText = `UPDATE "checkin" SET "checked_in" = $1
        WHERE "checkin"."day" = $2 AND "checkin"."cobot_id" = $3;`;
        pool.query(queryText, [membCheckOut.checked_in, membCheckOut.day, id])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Member checkout failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});



module.exports = router;