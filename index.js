const express = require('express');
const app = express();
const PORT = 8000;
//Setting view Engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

//Loading the routes
app.use('/' , require('./routes'));
app.listen(PORT,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`The server is running on the port ${PORT}`);

})