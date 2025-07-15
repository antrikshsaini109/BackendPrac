const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const userModel = require('./usermodel');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.send("hey");
})

app.get('/create', async (req,res) =>{
    let createduser = await userModel.create({
        name: "Tanuja",
        email: "sainitanuja765@gmail.com",
        username: "tanuja Saini"
    })
    res.send(createduser);
})

app.get('/update', async (req,res) =>{
    let updateduser = await userModel.findOneAndUpdate({username: "Antriksh"},{name: "Antriksh Kumar Saini"},{new: true})
    res.send(updateduser);
})

app.get("/read", async (req,res) => {
    let users = await userModel.find({username: "tanuja Saini"});
    res.send(users);
})

app.get('/delete', async (req,res) =>{
    let deleteduser = await userModel.findOneAndDelete({username: "Antriksh"});
    res.send(deleteduser);
})

app.listen(3000,function(){
    console.log("Its running!!!!")
});
