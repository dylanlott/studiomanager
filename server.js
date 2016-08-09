//STUDIOKEEPER
//REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bson = require('bson');
const app = express();
const router = express.Router();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(session({
    secret: process.env.PASSPORT_SECRET || '1d5adg36s5vf2adr7vwefgv1e46b634',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Controllers
const UserCtrl = require('./controllers/UserCtrl');
const logger = require('./utils/logger');
//Models
const User = require('./models/User');
const Location = require('./models/Location');
const Client = require('./models/Client');
const Project = require('./models/Project');
const Gear = require('./models/Gear');
const Track = require('./models/Track');

//Database
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/studiokeeper";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Connected to db at " + mongoUri);
});

//Routes
app.use(logger);
app.use('/client', require('./routes/ClientRoutes'));
app.use('/track', require('./routes/TrackRoutes'));
app.use('/project', require('./routes/ProjectRoutes'));
app.use('/gear', require('./routes/GearRoutes'));
app.use('/location', require('./routes/LocationRoutes'));
app.use('/users', require('./routes/UserRoutes'));

//Port
const port = 8080;
app.listen(process.env.EXPRESS_PORT || port, function() {
    console.log("The Wolverine Pack is hunting on port ", port);
});

//Local Login
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(username, password, done) {
    console.log(username, password)
    User.findOne({
        email: username
    }).exec().then(function(user) {
        if (!user) {
            return done(null, false);
            console.log('no user');
        }
        user.comparePassword(password).then(function(isMatch) {
            if (!isMatch) {
                console.log('no match');
                return done(null, false);
            }
            return done(null, user);
        });
    });
}));

//Authorization
const requireAuth = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(403).end();
    }
    return next();
}

//Deserializer
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

/* Endpoints
 **********************************************************************/
//Auth
app.post('/users', UserCtrl.createUser);
app.post('/users/auth', passport.authenticate('local'), function(req, res) {
    console.log("Logged In");
    return res.status(200).json(req.user).end();
});
app.get('/user', UserCtrl.getUser);

//export app for server testing
module.exports = app;
