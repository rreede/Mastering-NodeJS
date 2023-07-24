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

app.get('/about', (req,res)=>{
    //res.send('<p>Home Page</p>');
    res.render('about');
});

app.get('/blogs/create', (req,res)=> {

    res.render(create.ejs);

});

/*
app.get('/about-us', (req,res)=>{
    //res.send('<p>Home Page</p>');
    res.redirect('about');
});

*/

app.use((req,res) => {
    res.status(404).render('404');
});