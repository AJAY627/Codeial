const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./cofig/mongoose');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// user express router
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views', './views');                                                         

app.listen(port, function(err){
    if(err){
        console.log(`Error in runing the server:${err}`);
    }
    console.log(`Server is runing on port:,${port}`);
});