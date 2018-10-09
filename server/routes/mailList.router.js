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
        const initSent = req.body;
        //console.log(initSent); 
        const queryText = `UPDATE "mailinglist" SET "init_welcome" = $1 
                            WHERE "mailinglist"."id" = $2`;
        pool.query(queryText, [initSent.checked, initSent.id])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                console.log('Init failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

//Delete will remove individual entries in "mailinglist"
router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const idOfItemtoDelete = req.params.id;
        //console.log('deleting ', idOfItemtoDelete);
        const queryText = `DELETE FROM "mailinglist" 
                            WHERE "id" = $1;`;
        pool.query(queryText, [idOfItemtoDelete]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in delete', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;