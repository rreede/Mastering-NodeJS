const express = require('express');

// Create App
const app = express();

// Register View Engine

app.set('view engine', 'ejs');

// Listen Port
app.listen(3000);


app.get('/', (req,res)=>{
    //res.send('<p>Home Page</p>');
    res.render('index');
});
