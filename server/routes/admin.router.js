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
//this route gets the current amount of members who are checked in
router.get('/currentMemberCount', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT SUM ("quantity")
                            FROM "checkin"
                            WHERE "checked_in" = true AND "member"= true AND day =current_date;;`;
        pool.query(queryText).then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('get count of current members', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
})
/* this route gets the amount of visitors who have checked-in today 
(visitors often do not check-out, so that data would be skewed too much to define as currently-in) */
router.get('/todayGuestCount', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT SUM ("quantity")
                            FROM "checkin"
                            WHERE "checked_in" = true AND "visitor" = true AND day =current_date;`;
        pool.query(queryText).then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('get count of visitors today', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
})

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

//GET route will return * "checkin" for todays date only 
router.get('/today', (req, res) => {
    if (req.isAuthenticated()) {
        const qText = `SELECT * FROM "checkin" 
                        WHERE "day" = CURRENT_DATE 
                        ORDER BY "day" ASC;`;
        pool.query(qText).then((results) => {
            //console.log('todays checkins', results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('GET Today', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

//GET route will return the total number of visitors who have visited the space
router.get('/totalVisitors', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT SUM ("quantity")
                            FROM "checkin"
                            WHERE "visitor" = true;`
        pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('error obtaining total visitor count', error)
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

//GET route will return the total number of visitors who have visited the space AND wanted more info
router.get('/visitorsInterestedInMoreInfo', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT COUNT ("name")
                        FROM "mailinglist";`;
        pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('error obtaining visitors interested in more info', error)
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});
//GET route will return the number of visitors who vistited the spaces, grouped by purpose
router.get ('/visitorsPurpose', (req, res)=> {
    if (req.isAuthenticated()){
        const queryText = `SELECT "purpose", COUNT ("name")
                            FROM "checkin"
                            WHERE "visitor" = true
                            GROUP BY purpose;`;
        pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) =>{
            console.log('error obtaining the purposes of visitors in the space', error)
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});

/* 
aveVisitsPerDayYear: '45',
aveVisitsPerDayMonth: '55',
aveVisitsPerDayLastYear: '38',
 */

// GET route returns the number of visits this year according to checkin database
router.get ('/visitsThisYear', (req, res)=>{
    if (req.isAuthenticated()){
         const queryText = `SELECT SUM ("quantity") FROM checkin WHERE date_part('year', day) = date_part('year', CURRENT_DATE);`;
         pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) =>{
            console.log('error obtaining the purposes of visitors in the space', error)
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});
//GET route returns the number of visits this month according to the checkin database
router.get ('/visitsThisMonth', (req, res)=>{
    if (req.isAuthenticated()){
         const queryText = `SELECT SUM ("quantity") FROM checkin WHERE date_part('month', day) = date_part('month', CURRENT_DATE);`;
         pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) =>{
            console.log('error obtaining the purposes of visitors in the space', error)
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});
// GET route returns the number of visits last month according to the checkin database
router.get ('/visitsLastMonth', (req, res)=>{
    if (req.isAuthenticated()){
         const queryText = `SELECT SUM ("quantity") FROM checkin WHERE date_part('month', day) = date_part('month', CURRENT_DATE- interval '1' month);`;
         pool.query(queryText).then((results) => {
            res.send(results.rows)
        }).catch((error) =>{
            console.log('error obtaining the purposes of visitors in the space', error)
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});

//GET route returns the number of check-ins by hour for the current day
router.get ('/visitsEachHourToday', (req, res)=>{
    if (req.isAuthenticated()){
        const queryText = `select
                            date_trunc('hour', time), 
                            count(1)
                            from checkin
                            WHERE day = CURRENT_DATE
                            group by 1;`;
        pool.query(queryText).then((results)=> {
            res.send(results.rows)
        }).catcy((error)=>{
            console.log('error getting hourly visit data', error);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});
//GET route returns the number of check-ins by day for the past 7 days
router.get ('/visitsThisWeek', (req, res)=>{
    if (req.isAuthenticated()){
        const queryText = `select
                            date_trunc('day', day), 
                            count(1)
                            from checkin
                            WHERE day = CURRENT_DATE
                            group by 1;`;
        pool.query(queryText).then((results)=> {
            res.send(results.rows)
        }).catcy((error)=>{
            console.log('error getting hourly visit data', error);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});
// GET route returns the number of check-ins by day for the past month
router.get ('/visitsEachHourToday', (req, res)=>{
    if (req.isAuthenticated()){
        const queryText = `select
                            date_trunc('hour', time), 
                            count(1)
                            from checkin
                            WHERE day = CURRENT_DATE
                            group by 1;`;
        pool.query(queryText).then((results)=> {
            res.send(results.rows)
        }).catcy((error)=>{
            console.log('error getting hourly visit data', error);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});
// GET route returns the number of check-ins by month for the past year
router.get ('/visitsEachHourToday', (req, res)=>{
    if (req.isAuthenticated()){
        const queryText = `select
                            date_trunc('hour', time), 
                            count(1)
                            from checkin
                            WHERE day = CURRENT_DATE
                            group by 1;`;
        pool.query(queryText).then((results)=> {
            res.send(results.rows)
        }).catcn((error)=>{
            console.log('error getting hourly visit data', error);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});

//GET route returns data from the checkin table
router.get('/allCheckInData', (req, res) =>{
    if (req.isAuthenticated()){
        const queryText = `SELECT * from checkin;`;
        pool.query(queryText).then((results)=>{
            res.send(results.rows)
        }).catch((error)=>{
            console.log('error obtaining data', error)
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});


module.exports = router;