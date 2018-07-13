const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('helloWorld')
});
app.listen(3000);
app.use('/statc',express.static('public'))