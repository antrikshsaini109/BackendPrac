/*var arr=[1,2,3,4];

(forEach use)
arr.forEach(function(val){  
    console.log(val + " hello");
})
*/

/* Used we want to create another array from an pre existing array
arr.map(function(val){
    console.log(val+12);
})

let ans=arr.map(function(val){
    return val*3;
})
console.log(ans);*/

/* filter(will give an another new array which consist fo things that we choose from arr(old array))
let ans=arr.filter(function(val){
    if(val >=3){ return val;}
    else return false;
})
console.log(ans);*/

/* find(this is use to find value in array but it incase of multiple vaule it will provide the first ons as answer)
let ans = arr.find(function(val){
    if(val==2){ return 2;}
})
console.log(ans);*/

/*indexOf(It is used to find index or position of certain value in an array)
let ans = arr.indexOf(4);
console.log(ans);
*/

/* TALKING ABOUT OBJECTS

var obj={
    name:'antriksh',
    age:14
}
Object.freeze(obj); //to freeze value inside an object
obj.age=20;
console.log(obj.name);
console.log(obj['age']);*/

/*FUNCTION
function abcd(){
    
    return "hello";
}

let ans=abcd();*/


/* Async javascript coding

// line by line code chale ise kehte hai synchronous
//jo bhi code async nature ka ho, use side stack me bhej do aur agle code ko chlao jo ki sync nature ka ho, jab bhi sara sync code chal ajaye, tab check karo async code complete hua ya nahi to ussey main stack me lao aur chala do

async function abcd(){
    var blob = await fetch('https://randomuser.me/api/');
    var ans = await blob.json();
    console.log(ans.results[0]);
}

abcd();*/
