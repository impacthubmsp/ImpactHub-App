
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const adminRouter = require('./routes/admin.router');
const visitorRouter = require('./routes/visitor.router');
const memberRouter = require('./routes/member.router');
const templateRouter = require('./routes/template.router');
const mailListRouter = require('./routes/mailList.router');
const mailChimpRouter = require('./routes/mailChimp.router');
const messageRouter = require('./routes/message.router');
const passwordRouter = require('./routes/password.router');
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
app.use('/api/admin', adminRouter);
app.use('/api/visi', visitorRouter);
app.use('/api/memb', memberRouter);
app.use('/api/template', templateRouter);
app.use('/api/mail', mailListRouter);
app.use('/api/mailchimp', mailChimpRouter);
app.use('/api/message', messageRouter);
app.use('/api/password', passwordRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
