const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get("/", function (req, res){
    bcrypt.genSalt(10, function(err,salt) {
        bcrypt.hash(myPlaintextPassword,salt, function(err, hash) {
            console.log(hash);
        });
    });
})

app.get("/read", function (req, res){
    res.send("read page");
})


app.listen(3000, function(){
    console.log("its running");
})