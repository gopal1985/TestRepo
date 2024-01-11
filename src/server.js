const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to the marvellous app');
})

app.listen(3000, function(){
    console.log('App started on port 3000');
});