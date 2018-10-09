const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//GET route will return * entries in "mailinglist"
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT * FROM "mailinglist" 
                        ORDER BY "date_time" ASC;`;
        pool.query(qText).then((results) => {
            //console.log('mailinglist', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET LIST', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});
//Put route will toggle "mailinglist.init_welcome" boolean
//Required minimum req.body object format {id:'', checked:boolean}
router.put('/init', (req, res) => {
    if (req.isAuthenticated) {
        const initsent = req.body;
        //console.log(membCheckOut); 
        const queryText = `UPDATE "mailinglist" SET "init_welcome" = $1 
                            WHERE "mailinglist"."id" = $2`;
        pool.query(queryText, [initsent.id, initsent.checked])
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