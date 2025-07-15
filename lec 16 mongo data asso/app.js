const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get('/',function(req,res){
    res.send("chalra hai");
});

app.get('/create',async function(req,res){
   
    let Createduser = await userModel.create({
        username: "Antriksh",
        age: 21,
        email:"antriksh@gmail.com"
    });

    res.send(Createduser);
});

app.get('/post/create',async function(req,res){
    let post = await postModel.create({
        postdata: "hello ji",
        user: "677564a1395224c96b01157a",

    })

    let user = await userModel.findOne({_id: "677564a1395224c96b01157a"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
});

app.listen(3000);