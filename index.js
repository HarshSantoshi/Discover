const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
const expressLayout = require('express-ejs-layouts');

const db = require('./config/mongoose.js')
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayout);
app.use(bodyParser.urlencoded({ extended: true }));
//extract style and script from subpages to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//Loading the routes
app.use('/' , require('./routes'));
//Setting view Engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

app.listen(PORT,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`The server is running on the port ${PORT}`);

})