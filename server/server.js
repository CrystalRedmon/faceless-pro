const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const employerRouter =require('./routes/employer.router');
const employerProfileRouter = require('./routes/employerProfile.router');
const candidateProfileRouter = require('./routes/candidateProfile.router');
const candidateInfoRouter = require('./routes/candidateInfo.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/employer', employerRouter);
app.use('/api/employerProfile', employerProfileRouter);
app.use('/api/candidateProfile', candidateProfileRouter);
app.use('/api/candidateInfo', candidateInfoRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
