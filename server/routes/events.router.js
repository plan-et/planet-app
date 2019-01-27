var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool');

//gets all event types in list (large and small right now)
router.get('/eventtypes', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM event_types;`, function (errorMakingDatabaseQuery, result) {
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

//gets event by id minus the checklist
router.get('/:id', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM small_events WHERE id = $1;`,[req.params.id], function (errorMakingDatabaseQuery, result) {
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

//gets event checklist by event id
router.get('/:id/checklist', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT DISTINCT A.item FROM checklist_small_events as A
            JOIN checklist_small_events_small_event as B
            ON A.id = B.checklist_id
            WHERE B.event_id=$1;`,[req.params.id], function (errorMakingDatabaseQuery, result) {
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


//creates checklist for last added event, $2 is the id of the checklist_small_event item (hackey i know)
router.post('/create/smallevent/checklist', function (req, res) {
    const query = 
    `INSERT INTO checklist_small_events_small_event (event_id, checklist_id)
    VALUES ($1,$2),($1,$2)`;
    var smallEventChecklist = req.body;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);

        } else {
            client.query(query, [newSmallEventId, smallEventChecklist.id],
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