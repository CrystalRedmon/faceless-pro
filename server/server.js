const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.Server(app);

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const employerRouter = require('./routes/employer.router');
const employerProfileRouter = require('./routes/employerProfile.router');
const candidateProfileRouter = require('./routes/candidateProfile.router');
const candidateInfoRouter = require('./routes/candidateInfo.router');
const messageRouter = require('./routes/message.router');

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
// app.use('/api/message', messageRouter);

// Serve static files
app.use(express.static('build'));

// Initialize Socket.IO
const io = socketio(server);

// Define event handlers for Socket.IO
io.on('connection', socket => {
  console.log('User connected');
  
  socket.on('send message', data => {
    console.log(`Received message: ${data.message}`);
    // Save message to database
    const sqlText = 'INSERT INTO message (sender_id, receiver_id, content) VALUES ($1, $2, $3)';
    const sqlParams = [data.sender, data.receiver, data.message];
    pool.query(sqlText, sqlParams)
    .then(() => {
      console.log('Message saved to database');
      
      // Emit message to all users
      io.emit('receive message', data);
    })
    .catch(err => {
      console.log(err);
    });
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});