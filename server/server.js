const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// Route includes
    // example: const userRouter = require('./routes/user.router');
const smallEventsRouter = require('./routes/smallevents.router')
const largeEventsRouter = require('./routes/largeevents.router')




// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Routes */
    // example: app.use('/api/user', userRouter);
app.use('/api/events/small', smallEventsRouter);
app.use('/api/events/large', largeEventsRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
