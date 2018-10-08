const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//POST route will login members to "checkin" 
//To be used in conjunction with an API call to CoBot
//Required minimum req.body object format {name:'', member:true, purpose:'', cobot_id:''}
router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const membCheckIn = req.body;
        //console.log(membCheckIn);
        const queryText = `INSERT INTO "checkin" ("name","member","purpose", "cobot-id") 
                            VALUES ($1, $2, $3, $4);`;
        pool.query(queryText, [membCheckIn.name, membCheckIn.member, membCheckIn.purpose, membCheckIn.cobot_id])
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

//PUT route will switch "checkin.checked-in" from 'true' to 'false'.
//To be used in conjunction with an API call to CoBot.
//Required minimum req.body object format {checout:false, name:'', cobot_id:''}
router.put('/', (req, res) => {
    if (req.isAuthenticated) {
        const membCheckOut = req.body;
        //console.log(membCheckOut); 
        const queryText = `UPDATE "checkin" SET "checked-in" = $1 
                            WHERE "checkin"."name" iLIKE  $2 AND "checkin"."cobot-id" = $3;`;
        pool.query(queryText, [membCheckOut.checkout, membCheckOut.name, membCheckOut.cobot_id])
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