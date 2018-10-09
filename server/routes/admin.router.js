const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET Route returns * "checked-in" = 'true'
//Used to find AMOUNT of people checked in
//Data will be added together in redux to get total
router.get('/count', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT "quantity" 
                        FROM "checkin" 
                        WHERE "checked-in" = true;`;
        pool.query(qText).then((results) => {
           //console.log('Count', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET Count', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});





module.exports = router;