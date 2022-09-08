const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html'); // __dirname returns the current path even on server or local computer
})

app.listen(3000,function(){
    console.log("server started at port 3000 bruh");
})