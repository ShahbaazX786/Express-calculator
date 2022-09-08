const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html"); // __dirname returns the current path even on server or local computer
});


app.post('/',(req,res)=>{
    var n1=Number(req.body.height);
    var n2=Number(req.body.weight);
    var result = (n1/(n2*n2))
    res.send("Your Body Mass Index is :" + result);
});

app.listen(3000,function(){
    console.log("server started at port 3000 bruh");
});