const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET Route returns * "checked-in" = 'true'
//Used to find AMOUNT of people checked in
//Data will be added together in redux to get total
router.get('/count', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT "quantity","member","visitor" 
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

//GET route will return * "checkin" entries from last X days 
//Use Momentjs to format earliest date as YYYY-MM-DD before sending to server
router.get('/history/:date', (req, res) => {
    if (req.isAuthenticated()) {
        const getHistory = req.params.date
        //console.log('GET History', req.params.date);
        const query = `SELECT * FROM "checkin" 
                    WHERE "day" > $1 
                    ORDER BY "day" ASC;`;
        pool.query(query, [getHistory]).then(results => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error Getting History', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});



module.exports = router;