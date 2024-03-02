/*let mare ='he is a great man'
let mysis = mare.toUpperCase();
console.log(mysis)
let greeting = 'congraculation'
greeting.trim()

let mrler = 'cartage'
mrler.indexOf('car')
console.log(mrler.indexOf('t'))
let maths = 'super egg'
maths.slice(0,3) 
console.log(maths.slice(1) )
console.log(maths.slice(4))
console.log(maths.replace('super','mini'))
let broInput = "toggle.com";
let cleanedInput =  broInput.trim().toUpperCase();
const index = broInput.indexOf('h');
console.log( index)
console.log(cleanedInput)
const age = "34" + "23" ;
console.log(age)
let mydear = "this is a programming language"
console.log(mydear.slice(3).replace("l" ,"L"));
console.log('I am a $ {3+4}student')

let item = 'cocacola';
let price = 230;
let quantity = 4;
//"you bought ${quantity} ${item},total price: $${price*quantity}";
let asreman = null;
asreman = 'asre the great';
console.log(asreman)
let pickles;
pickles;
console.log(pickles)
let drink = 'tea';
console.log(drink[1])

f(age < 57 || age >= 70){
    console.log("you are a man");
}
else {
    console.log("that is a a great man");
}
*/
/*
alert('hello student!');
"hi".toUpperCase();
console.log("hi".toUpperCase());
let mysis = "eating"
if(mysis==="eatig"){
    console.log("it is a big man ")
}
else if(mysis==="eating"){
    console.log("it is a wrong idea")
}*/
/*
let mybro  = " catalog";
if (mybro.length >= 7)
{if(mybro.indexOf(' ') !== 0){
    console.log("mybro is not include spaces");
}
else{
    console.log("valide mybro")
}

}
   else{
console.log("asre man")
}*/
/*

let beti =23;
if(beti < 5 || beti >=19){
    console.log("yollow")
}
else{
    console.log("that is a  big man")
}*/
//var board = [['0',null,'x'],[null,'x','0'],['x','0',null]]
//console.log(board)
/*let colors = ['red','blue','blacka']
console.log(colors)
let bros = [false,845,null,'marse'];
bros.length;
console.log(bros.length)
console.log(bros[0])
bros.push('asre')
console.log(bros)
const masre = ['brown','yellow'];
masre.push('blue');
masre[0]= 'pink';
console.log(masre) 

*/
/*
const subject ={
    biology : 39,
    chemistry : 89,
    physics : 78,
    ranks : 'ten'
}
console.log(subject)
*/
/*
for (let i = 1; i<=10; i++){
    console.log(i);
}

*/
/*
for (let i = 77; i>=0; i-=10){console.log(i)}
*/
/*
const animals = ['cat', 'dog','bears'];
for (let i = 0; i < animals.length; i++){
    console.log(i,animals[i]);
}
*/
/*
let myteach = 0;
while(myteach < 60){
    console.log(myteach);
    myteach++;
}*/
/*
let mybro = Math.floor(Math.random()* 10);
let mysis = Math.floor(Math.random()*10);
while(mysis == mybro){
    console.log(`Guessed ${mysis}...wrong!`)
    mysis = Math.floor(Math.random()*10);

}
console.log(`corect Guessed: ${mysis} & target was :${mybro}`)
*/
/*

for(let i = 2; i<=10; i++){
    console.log(`i is :${i}`)
    for (let j =1; j <3; j++){
        console.log(`   j is :${j}`)
    } 

}
*/
/*
let str = 'LOL';
for (let i = 0; i <= 4; i++){
    console.log("outer:", i);

    for (let j = 0; j < str.length; j++){
        console.log('Inner:',str[j]);
    }
}*/
/*

const myfather= [
    ['man', 'sew','dad'],
    ['mom','sis','dear'],
    ['asre','siss','bro']
]
for(let i= 0; i < myfather.length; i++){
    const row = myfather[i];
    console.log(`ROW ${i +1}`);
    for (let j= 0; j<row.length; j++){
        console.log(row[j])
    }
*/
/*
let count = 0;
while(count < 10){
    
    count++;
    console.log(count)
}

*/
/*
let mydear = Math.floor(Math.random()*10);
let mysis = Math.floor(Math.random()*10);
while (true){
    mysis = Math.floor(Math.random()*10);
    if (mysis ===mydear){
        console.log(`correct! guessed: ${mysis} & target was: ${mydear}`);
        break;
    }
    else {
        console.log(`guessed ${mysis}...Incorrect`);
    }
}
*/
/*
let mydear= ['mybro','prophet','hen','cook']
for (let sub of mydear){
    console.log(`${sub} - www.dear.com/r/${sub}`);
}
*/
/*for (let i =10; i<=1000; i*=10)
{console.log(i);}
*/

/*
for(let i =1; i<=10; i++){
    console.log(`i is: ${i}`)
        for(let j =1; j<=4; j++){
                 console.log(`  j is: ${j}`)
        
    }
}
*/
/*
let count = 0;
while (count < 10){
    
    count++;
    console.log(count)

}
*/
/*
const SECRET ="this is a technology"
let guess = prompt("enter the secret code....");
while (guess !==SECRET){
 guess = prompt("enter the secret code....");

}
console.log("congrat")
*/
/*
let input = prompt("hey,say something!")
while (true){
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me") break;

}
console.log("are you a student")
*/ 
/*  
  v
for( let i =0; i< 100; i++){
    console.log(i)
    if(i==50)
        continue;
    
}
*/
/*
let maximum =parseInt(prompt("enter the maximum number!"));
while (!maximum){
    maximum = parseInt(prompt("Enter number!"))
}
const targetNum=Math.floor(Math.random()*maximum) + 1;
console.log(targetNum);
let guess = parseInt(prompt("Enter your first guess"));
let attemps = 1;

while (parseInt(guess )!==targetNum){
    if (guess === 'asre')break;
    attemps++;
    if (guess > targetNum){
        guess = parseInt(prompt("Too high! enter a new guess  :"))

    }
    else {
        guess =parseInt(prompt("Too low! Enter a new guess:"))
    }
}
if (guess === 'asre'){
    console.log("Ok,you quite!")
}
else {
    console.log ("congrat you win!")
console.log(`you get! It took you ${attemps} guess`);

}
*/
/*
const food = ['banana','orange','meat', 'carrot','appel']
for(let i =0; i < food.length; i++){
    console.log(`visit food.org/cs ${food[i]}`)
}
for (let sub of food){
    console.log(sub)
}


*/
/*
const string=[
    ["man","tola","his","her"],
    ["sos","loi","hfyr","jhu",],
    ["tret","dfgr","RTrtet","ytryt"]
]
for (let i = 0; i < string.length; i++){
    const row = string[i];
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}
for (let row of string){
    for(let sub of row){
        console.log(sub);
    }
}
*/
/*
for (let char of "hello manlibel"){
    console.log(char)
} */
/*
const student = {
    man:76,
    demos:39,
    showsd:40,
    asre:98
}
for (let person in student){
    console.log(`${person} scored:${student[person]}`);
}
let total =0;
let scores = Object.values(student);
for(let score of scores){
    total+=score;

    
}
console.log(total/scores.length)
*/
/*
let bro = prompt("list a branch natural science?")
const sis = ['collect  banana', 'clean  unwanted ']
while(bro !== 'chemistry' && bro !== 'man' ){
    if (bro === 'biology'){
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }
    bro = prompt("what  is a branch natural science? ")
}
console.log("ok thanks")
*/
/*
let die1 = Math.floor(Math.random() *6) +1;
let die1 = Math.floor(Math.random() *6) +1;
let die1 = Math.floor(Math.random() *6) +1;
let die1 = Math.floor(Math.random() *6) +1;
l/et die1 = Math.floor(Math.random() *6) +1;
*/
/*
let die1 = rollDie(30);
let die5 = rollDie();
let die4 = rollDie(35);
let die3 = rollDie(56);
let die1 = rollDie();
let die1 = rollDie();
*/
/*

function singSong() {
    console.log("do")
    console.log("mom")
}
 function greeting(firstName,lastName){
     console.log("hi");
     console.log(`student ${firstName} ${lastName[0]}`)

}
function repeat(str,numTimes){
    let result = ' ';
    for(let i = 0; i < numTimes; i++){
        result += str;
     
        
    }
     console.log(result);

}*/

/*
function bro() {
    console.log('out of small man')
}
*/
/*
function findSmallnum(x,y){
    if (x<y){
        console.log(`${x} :small number`)
    }
   else if(x>y){
        console.log(`${y}:is small`)
    }
    else{
        console.log("dsjsakhdu")
    }
}
*/
/*
function add(x,y){
    if (typeof x !== "number" || typeof y !== "number"){
        return false;
    }
let sum =x+y;
return sum;
}
*/
/*
let totalBanana = 0;
function collectBananas(){
    let totalBanana = 89; 
}
console.log(totalBanana)

console.log(totalBanana)
*/
/*
let animals = 'cat';
function animalsMammal(){
     let animals = 'I is a small animal ';
    

}
console.log(animals)
*/
/*
let radius =6;
if (radius > 0){
    const PI = 3.14;
    let msg = 'hiiii'
    console.log(PI)
    console.log(msg)
}
console.log(radius)

*/
/*
for (var i = 0; i<5; i++){
    var msg ="asre man"
    console.log(msg)
}
console.log(msg)
console.log(i)
*/
/*
let radius = 8;
if(radius > 0){
    const PI =3.14;
    let circ = 2 *PI * radius;
    console.log(PI)
console.log(circ)n  
}
console.log(radius);
*/
/*
function bankRobbery( ){
    const heroes =['spidderman','chife','black man']
    function cryForHelp(){
        function inner(){
        for(let hero of heroes){
            console.log(`please give me,${hero.toLowerCase()}`)
        }
    }
    inner ();
    }
    cryForHelp();
}
*/
/*
consxt square = function (num){
    return num*num;
    square(7);

}


console.log(square(8));*/
//function add(x,y){
  //  return x + y;
//}
/*
const add = function(x,y){
    return x+y;

}
*/
/*
function callTwice(func){
    func();
    func();
}
function callTenTimes(f){
    for (let i =0; i< 10; i++){
        f();
    }
}
function rollDie (){
    const roll = Math.floor(Math.random()*6) +1
    console.log(roll) 
}
callTwice(rollDie)
callTenTimes(rollDie)*/
/*
function makeMyeterFunc(){
     const rand= Math.random();
     if (rand > 0.5){
         return function(){
             console.log("congrat, I am function")

         }
     }
     else{ 
     return function (){
alert("you are not virus")
     }
}
}
function isBetween(num){
    return num >= 50 && num <=60
}
function isBetween23(num){
    return num >= 10 && num <=50
}
*/
/*
function makeBetweenFunc(min,max){
    return function(num){
        return num >=min && num<=max
    }
}*/
//const testRang = function (num){
//    return num>=60 && num <=90;
//}
/*
const myMath = {
    PI : 3.14534,
    square(num){
        return num *num;
    },
    cube(num){
        return num ** 3;
    }
}
const cat = { name:"brown cat",
color:"red",
breed:"scottish fold",
meow(){
    console.log("this is ",this)
    console.log(` ${this.name} MEOW MEOW MEOW MEOW MEOW MEOW MEOW`)
}

}
const meow2 = cat.meow;
*/
/*
try {
    hello.toUppercase();

}
catch {
    console.log("error")
}


*/
/*
function yell(msg){  try
    {  console.log(msg.toUpperCase().repeat(4)) ;}
  catch (e) {
      console.log(e);
      console.log("please pass a string next time!")
  }
}
*/
//const nums = [8,56,5,4,4,3,3,45,43,34];
//nums.forEach(function (n){
  //  console.log(n * n);
//});
/*
const numbers = [34,56,77,8,89,98,890]
//function print(element){
  //  console.log (element)
//}
//print(numbers[0])
//print(numbers[2])
//numbers.forEach(print);

numbers.forEach(function (el){
    if (el % 2 == 0){
        console.log(el)
    }
  
});
//for (let el of numbers){
  //  console.log(el);
//}
*/
/*
const movies = [
    {
        name:'asre',
        score: 90
    },
    {
        name:'dani',
        score:57
    },
    {
        name:'masre',
        score:98
    },
    {
        name:'alebachew',
        score:98
    }

]
const broSell = movies.filter(m =>m.score > 60)
// const nome= movies.map(function (movie)
//{
  //  return `${movie.name} - ${movie.score / 10}`
//})
//const newStar = movies.map(movie =>(
  //  `${movie.name} - ${movie.score / 10}`
//))*/

//movies.forEach(function(movie)
//{
 //   console.log(`${movie.name}  - ${movie.score}/100`)
//});
//const texts = ['mom','jfgh','tpoyt'];
//const caps =texts.map( function(t){
  //  return t.toUpperCase();
    

//})
//const add = (x,y) =>{
  //  return x+y;
//}
//const square = (x) =>{
  //  return x**2;
//}
//const  rollDie =() =>{
  //  return Math.floor(Math.random() *6 ) +1

//}
//const add = (a,b) =>( 
  //  a + b 
    //);
    //const isEven = num =>(
        //num % 2 === 0
    //);
    //const isOdd =num=>num%2===1;
   /*
    console.log("hello ........");
    setTimeout(() => {
        console.log("... are still there");
        
    }, 3000);
    console.log("asre");
     const id =setInterval(() => {
        console.log(Math.random());
        
    }, 3000);*/
    /*
    const nums  = [34,9,8,7,6,5,42,3];
    nums.filter(n=>{
        return n<10
    })*/
    //const odds = nums.filter(n =>{
      //      return n % 2 === 1;
    //})
    //const nums = [3,4,5,6,7,8,66];
//[3,8,9,60,56,34].reduce((accumulator, currentValue) =>){
  //      return accumulator+currentValue;
   // }
   /*
   const nums = [34,6,7,8,98,78,65,45]
   //let total = 0;
   //for(let num of nums){
     //  total += num;
   //}
   //console.log(total);
   //const total = nums.reduce((total ,num) => { return total +num;})
   const minNum = nums.reduce(( min,num) =>{
    if (num <min){
        return num;
    }

    return min;
})
*/
//const evens = [2,6,8,12];
//evens.reduce((sum,num) => sum + num )
/*
const person = {
    firstName:'asre',
    lastName:'Tolaa',
    fullName:function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
    console.log(this.fullName());
            
        }, 4000)
    }
}
*/
//function multiply(a,b) {
  //  b = typeof b !== 'undefined' ? b:1;
    //return a*b;
//}
/*
function multiply(a,b=4){
    return a*b;
}
const nums = [6,78,76,656,45];
Math.min(nums);
 function rollDie(numSides){
     return Math.floor (Math.random()*numSides)*1
 }
 function  greet (person,msg = "hey there", punc = "!"){
     console.log( `${msg} ${person} ${punc}`);
     const cats = ['asew','wertrt','rocket'];
     const dogs = ['werwddr','rtyu','eeeeee'];
     console
 }
*/
//const cats  = ['asew','wertrt','rocket'];
//const dogs = ['werwddr','rtyu','eeeeee'];
//const allPets = [...cats, ...dogs]
/*
const feline = {legs: 4, family: 'torikey'}
const canine = { isPhylosophy: true , family:'camel'}
const catDog = {...feline,...canine};
const dataFromFrom ={
    email:'asreman@gmail.com',
    password:'asre123999789',
    username:'ytrttyertyyt'
}
const myBro ={...dataFromFrom,id:345435, isadmin:true}
function sumAll(){
    let total =0;
    for(let i =0; i<arguments.length; i++)
    {
        total += arguments[i];
    }
    return total;
}
*/
//function sum(...nums) {
  //  return nums.reduce((total,el)=>total+el)
//}

function raceResult(gold,silver,...everyoneElse){
    console.log(`gold medal goes to: ${gold}`)
    console.log(`silver medal goes to: ${silver}`)
    console.log(`everyonElse to: ${everyoneElse}`)


}
const scores = [992385,98564,5678,987,2345,34567,6789];
const highScore =scores[0];
const secondHigherScore = scores[1];
const[sol,ale,...bro]=scores;
const brot ={
    email :'harvey@gmail.com',
    password:'igtguuytguug',
    firstName:'john',
    lastName:'sofar',
    born: 1920,
    died:1930,
city: 'adis'

}
//const firstName= brot.firstName;
//const email=brot.lastName;
//const born= brot.born;

const{password,email,firstName,lastName}=brot;
function fullName (brot){
    return `${brot.firstName} ${brot.lastName}`

}

//const multiply  = (x,y) => x*y;
//const square = (x) =>multiply(x,x);
//const isRightTriangle = (a,b,c)=>{
//    return square(a) + square(b) === square(c);
//};

//const newTodo = input.asrr;
//saveToDatabase(newTodo);
//input.asrr = '';
 console.log('I print first!')
 for(let i= 0 ;i++; i<9){
   console.log("asre");
   
 }

console.log('I print second!');

