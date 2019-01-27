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

//gets LARGE events by id minus the checklist
router.get('/:id', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM large_events WHERE id = $1;`,[req.params.id], function (errorMakingDatabaseQuery, result) {
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

//gets event checklist by event id for large event
router.get('/:id/checklist', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT DISTINCT A.item FROM checklist_large_events as A
            JOIN checklist_large_events_large_event as B
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

let newLargeEventId;
//Adding a new event, WITH checklist!!!!
router.post('/create', function (req, res) {
    
    const query = 
`WITH large_events_entry as(
                    INSERT INTO "large_events" (event_name, date, start_time, end_time, description, public, event_type)
                    VALUES($1, TO_DATE($2, 'Mon DD YYYY'), to_char($3::time, 'HH12:MI AM'), to_char($4::time, 'HH12:MI AM'), $5, $6, $7)
                   RETURNING id),
 organizers_large_events_entry as (
                    INSERT INTO organizers_large_events (user_id , large_event_id) 
                    VALUES($8,(SELECT id from large_events_entry))
                    RETURNING id)
                    INSERT INTO checklist_large_events_large_event (event_id, checklist_id, haveneedna) 
                    VALUES 
                    ((SELECT id from large_events_entry),1,$9),
                    ((SELECT id from large_events_entry),2,$10),
                    ((SELECT id from large_events_entry),3,$11),
                    ((SELECT id from large_events_entry),4,$12),
                    ((SELECT id from large_events_entry),5,$13),
                    ((SELECT id from large_events_entry),6,$14),
                    ((SELECT id from large_events_entry),7,$15),
                    ((SELECT id from large_events_entry),8,$16),
                    ((SELECT id from large_events_entry),9,$17);`;
    var newLargeEvent = req.body;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);

        } else {
            client.query(query , [newLargeEvent.event_name, newLargeEvent.date, newLargeEvent.start_time, 
                newLargeEvent.end_time, newLargeEvent.description, newLargeEvent.public, newLargeEvent.event_type, newLargeEvent.user_id,
                newLargeEvent.checklistItems[0],newLargeEvent.checklistItems[1],newLargeEvent.checklistItems[2],newLargeEvent.checklistItems[3],newLargeEvent.checklistItems[4],
                newLargeEvent.checklistItems[5],newLargeEvent.checklistItems[6],newLargeEvent.checklistItems[7],newLargeEvent.checklistItems[9]],
                function (errorMakingDatabaseQuery, result) {
                    done();
                    if (errorMakingDatabaseQuery) {
                        console.log('error', errorMakingDatabaseQuery);
                        res.sendStatus(500);

                    } else {
                        res.sendStatus(201);
                    }
                })
        }
    })
})


module.exports = router

