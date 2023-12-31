const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const db = require('./config/mongoose.js');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy.js');
const sassMiddleware = require('node-sass-middleware')

const MongoStore = require('connect-mongo')(session)

app.use(sassMiddleware({
  src :'./assets/scss' , 
  dest : './assets/css' ,
  debug: true ,
  outputStyle : 'extended' , 
  prefix : '/css'
}))
app.use(express.static('./assets'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayout);

// Extract style and script from subpages to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Setting view Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Mongo Store is used to store the session cookie in the DB
app.use(
  session({
    name: 'Discover',
    // Change secret before deployment
    secret: 'thisismyfirstsocialwebsite',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    }
    ,
    store: new MongoStore(
    {
      mongooseConnection: db ,
      autoRemove: 'disabled',
    },
    function(err){
        console.log(err || 'connect-mongodb Done');
    }
    )
  })
);
const store = new MongoStore({
    mongooseConnection: db,
    autoRemove: 'disabled',
  });

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Loading the routes
app.use('/', require('./routes'));

app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`The server is running on port ${PORT}`);
});
