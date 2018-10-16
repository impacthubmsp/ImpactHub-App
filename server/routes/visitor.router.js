const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//POST route will login visitors to "checkin" 
//Required minimum req.body object format {name:'', visitor:true, purpose:''}
router.post('/', (req, res) => {
    if (req.isAuthenticated) {
        const visiCheckIn = req.body;
        console.log(visiCheckIn);
        const queryText = `INSERT INTO "checkin" ("name","visitor","purpose")
                            VALUES ($1, $2, $3);`;
        pool.query(queryText, [visiCheckIn.name, visiCheckIn.status, visiCheckIn.purpose])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Visitor Checkin POST Failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

//PUT route will switch "checkin.checked-in" from 'true' to 'false'.
//Required minimum req.body object format {checkout:false, name:'', checked_in:true}
router.put('/', (req, res) => {
    if (req.isAuthenticated) {
        const visiCheckOut = req.body;
        //console.log(visiCheckOut); 
        const queryText = `UPDATE "checkin" SET "checked-in" = $1 
                            WHERE "checkin"."name" iLIKE $2 AND "checkin"."checked-in" = $3;`;
        pool.query(queryText, [visiCheckOut.checkout, visiCheckOut.name, visiCheckOut.checked_in])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Visitor checkout failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});




module.exports = router;