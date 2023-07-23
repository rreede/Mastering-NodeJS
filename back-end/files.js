const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err,data)=>{
    if(err) {
        console.log(err);
    }

    console.log(data.toString());
});


// Write file

fs.writeFile('./docs/blog1.txt', 'Hello,world!')

console.log('last line');

fs.mkdir();