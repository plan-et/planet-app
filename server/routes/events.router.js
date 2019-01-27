var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM small_events;`, function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

let newSmallEventId;
//Adding a new event, need to add other fields and connect to organization.
router.post('/create/smallevent', function (req, res) {
    const query = 
    `WITH small_events_entry as(
                   INSERT INTO "small_events" (event_name, date, start_time, end_time, description, public, event_type)
                   VALUES($1, TO_DATE($2, 'Mon DD YYYY'), to_char($3::time, 'HH12:MI AM'), to_char($4::time, 'HH12:MI AM'), $5, $6, $7)
                   RETURNING id)
                   INSERT INTO organizers_small_events (user_id , small_event_id) 
                   VALUES($8,(SELECT id from small_events_entry));`;
    var newSmallEvent = req.body;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);

        } else {
            client.query(query , [newSmallEvent.event_name, newSmallEvent.date, newSmallEvent.start_time, 
                newSmallEvent.end_time, newSmallEvent.description, newSmallEvent.public, newSmallEvent.event_type, newSmallEvent.user_id],
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);

                    } else {
                        res.sendStatus(201);
                        newSmallEventId = result.rows[0].id
                        console.log(newSmallEventId)
                    }
                })
        }
    })
})





module.exports = router