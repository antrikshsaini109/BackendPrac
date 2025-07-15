  /*const fs = require('fs');

 fs.writeFile("hey.txt","hey hello kaise ho",function(err){
    if(err) console.error(err);
    else console.log("done");
  })*/

/*fs.appendFile("hey.txt"," mai to acha hun",function(err){
    if(err) console.error(err);
    else console.log("added");
  })*/

/*
fs.rename("hey.txt","hi.txt",function(err){
    if(err) console.error(err);
    else console.log("Name changed");
}) */

/*fs.copyFile("hi.txt","./copy/chicha.txt",function(err){
    if(err) console.error(err);
    else console.log("copied");
})*/

/*fs.unlink("./copy/chicha.txt",function(err){
    if(err) console.error(err.message);
    else console.log("deleted");
})*/

/*fs.rmdir("./copy",function(err){
    if(err) console.error(err.message);
    else console.log("Directory is deleted");
})*/

/*fs.copyFile("hi.txt","./copy/chicha.txt",function(err){
    if(err) console.error(err.message);
    else console.log("Copied");
})*/


/*INCASE OUR DIRECTORY IS NOT EMPTY
fs.rmdir("./copy", { recursive:true},function(err){
    if(err) console.error(err.message);
    else console.log("Directory is deleted");
})*/


/*const http = require('http');

const server= http.createServer(function(req,res){
    res.end("hello world")
})

server.listen(3000);
*/

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(function(req,res,next){
    console.log("middleware chla");
    next();
});

/*
app.use(function(req,res,next){
    console.log("middleware chla once again");
    next();
});*/

app.get('/',function(req,res,next){
    return next(new Error("something went wrong"))
});

/*
app.get('/about',function(req,res){
    res.send("about page");
});*/

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke')
});




app.listen(3000);

 

