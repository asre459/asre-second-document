/*
const btn= document.querySelector('#v2')
 btn.onclick = function(){
     console.log("you clicked me!");
console.log("I am astudent");
 }
  function asre(){
      console.log("okkkkkkkkkkkkkkkkkkk");
      console.log("stop touching me!");

  }
  btn.onmouseenter = asre;
  document.querySelector('h1').onclick = function(){
      alert('are you a student')
  }
  const btn3 = document.querySelector('#v3');
  btn3.addEventListener('click',asre)

  function twist(){
      console.log("asre man");
  }
  function shout(){
      console.log("shout");
  }
  const tasButton = document.querySelector('#tas');
  tasButton.onclick = shout;

  tasButton.addEventListener('click',twist ,{once: true})
  tasButton.addEventListener('click',shout ,{once: true})

  const button = document.querySelector('button');
  const h1= document.querySelector('h1');

  button.addEventListener('click',function(){
  
  const newColor= makeRandColor()
document.body.style.backgroundColor = newColor;
h1.innerText= newColor;




})
const makeRandColor = () =>{
    const r  = Math.floor(Math.random() * 255 );
    const g =  Math.floor(Math.random() * 255 );
    const b  = Math.floor(Math.random() * 255 );
      return `rgb(${r},${g},${b})`

}
const buttons = document.querySelectorAll('button')
for(let button of buttons){
    button.addEventListener('click' , function(){
button.style.backgroundColor = makeRandColor();
button.style.Color = makeRandColor();

    })

}
const h1s = document.querySelectorAll('h1')
for(let h1 of h1s){
    h1.addEventListener('click' , function(){
        console.log(this);
this.style.backgroundColor = makeRandColor();
this.style.Color = makeRandColor();

    })
    

} 


document.querySelector('button').addEventListener('click', function(evt){
    
console.log(evt);
})
const input = document.querySelector('input');
    
input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);
})

window.addEventListener('keydown',function(e){
    switch (e.code) {
        case 'ArrowUp':
            console.log("up!");
            break;
            case 'ArrowDown':
                console.log("Arrowdown");
                break;
                case 'ArrowRight':
            console.log("right!");
            break;
            case 'ArrowLeft':
                console.log("Arrowleft");
                break;
    default:
        console.log("Ignored!");
    }

})


const tweetForm = document.querySelector('#tweetForm')
const tweetsContianer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function(e){
e.preventDefault();

    const usernameInput = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1];
console.log(usernameInput.value, tweetInput.value)

alert("submit!!")
const username=  tweetForm.elements.username.Value;
const tweet   =  tweetForm.elements.tweet.Value;
addTweet(username,tweet)


});
const addTweet = (username,tweet) =>{

    const newTweet = document.createElement('li');
    const bTag = document.createElement( 'b') ;
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContianer.append(newTweet);
    
}
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('click', function(e){
  h1.innerText =input.value ;
}) 

const button = document.querySelector('button');
const container=document.querySelector('#container');
button.addEventListener('click', function(e){
container.style.backgroundColor = makeRandColor();
e.stopPropagation();
})
container.addEventListener('click',function(){
    container.classList.toggle('hide');
})
const makeRandColor = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
 }
 

 const lis = document.querySelectorAll('li');
 for(let li of lis  )
 {
     li.addEventListener('click',function(){
li.remove();
     })
 }
const tweetForm =document.querySelector('#tweetForm');
const tweetsContianer = document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    const usernameInput= tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value) 
    usernameInput.value ='';
    tweetInput.value='';

});
const addTweet= (username,tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweetsContianer.append(newTweet);

}
tweetsContianer.addEventListener('click',function(e){
    e.target.nodeT
    console.dir(e.target);
  e.target.remove();
  e.target.nodeName === 'LI' && e.target.remove();

})

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const resetButton = document.querySelector('#reset');

const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
let p1Score = 0;
let p2Score = 0;
let winningScore =10 ;
let isGameOver = false;
p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
isGameOver= true;
p1Display.classList.add('winner')
p2Display.classList.add('loser')

    }

    
    p1Display.textContent= p1Score;
    }
})
p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
isGameOver= true;
p2Display.classList.add('winner')
p1Display.classList.add('loser')

    }

    
    p2Display.textContent= p2Score;
    }
})
winningScoreSelect.addEventListener('change',function(){
    winningScore= parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset)
function reset(){
    isGameOver = false;
    p1Score= 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');

const multiply = (x,y) => x * y;
const square = x=> multiply(x,x);
const isRightTriangle = (a,b,c) => ( 
     square(a) + square(b) === square(c)
)
console.log("before");
isRightTriangle(6,8,10)
console.log("done!");

  
 
 console.log('I print first!');
 setTimeout(() => { 
     document.body.style.backgroundColor = 'black';  

 console.log('I print second');
 setTimeout(() => { 
    document.body.style.backgroundColor = 'blue';  
setTimeout(() => { 
    document.body.style.backgroundColor = 'yellow';  
setTimeout(() => { 
    document.body.style.backgroundColor = 'pink';  
}, 1000)
}, 2000)
}, 3000)
}, 4000)
4


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}
 delayedColorChange( 'blue' ,1000 ,() =>{
 delayedColorChange( 'red' ,1000 ,() =>{
 delayedColorChange( 'yellow' ,1000 ,() =>{
 delayedColorChange( 'orange' ,1000 ,() =>{
 delayedColorChange( 'brown' ,1000 ,() =>{
 delayedColorChange( 'green' ,1000,() =>{
    
 })
 })
 })
 })
 })
});
searchMoviesAPI('amadeus', () =>{
    saveToMyDB(movies,()=>{ 

    }, () =>{

    })
}, ()=>{

})


const fakeRequestCallback = (url,success, failure) =>{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Connection Timeout :(')
        }
        else{
            success(`Here is your fake data from ${url}`)
        }
        
    }, delay);
}
const  fakeRequest = (url) =>{
    return new Promise ((resolve ,reject) =>{
        const delay = Math.floor(Math.random() *(4500)) +500;
       setTimeout(()=>{
           if (delay > 4000){
               reject('Connection Timeout:(')
           }
           else {
               resolve(`here is your fake data from ${url}`)
           }
       } , delay)
    })
}
async function makeTwoRequest(){
   try{let data1 = await fakeRequest('/page1');
   let data2 = await fakeRequest('/page2');
   console.log(data1);
   console.log(data2);


} catch (e){
    console.log("caught an error!");
    console.log("error is :",e);

}} 
fakeRequestCallback('book.com/page1',function(response){ 
    console.log("It worked!!!")
   console.log(response);
}, function(err){
    console.log("asre",err)
})


fakeRequestPromise('asre.com/api/coffee/page1')
.then((data)=>{
    console.log("It worked !!! (page1)");
    console.log(data);
    return fakeRequestPromise('asre.com/api/coffee/page2')
})
.then((data)=>{
    console.log("It worked (page2)");
    console.log(data);
    return fakeRequestPromise('asre.com/api/coffee/page3')

})
.then((data)=>{
    console.log("It worked (page3)");
    console.log(data);
})

.catch(()=>{
    console.log("oh no, a result failed");
})



new Promise((resolve,reject)=>{ 
    resolve();
})

const fakeRequest = (url) => {
    return new Promise(( resolve, reject) =>{
        const rand = Math.random();

        setTimeout(()=>{
            if(rand < 0.6){
                resolve('your fake data here');


            }
            reject('Request Error!')
        },3000)

    })
}
fakeRequest('/dogs/1')
.then((data) =>{
console.log("done with request!");
console.log('data is:', data);
})
.catch((err) =>{
    console.log("oh no!", err);
})


const delayedColorChange = (color,delay) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();

        }, delay);


    })
}
delayedColorChange('red',1000) 
.then(() => delayedColorChange('orange',1000))
.then(() => delayedColorChange('blue',1000))
.then(() => delayedColorChange('brown',1000))
.then(() => delayedColorChange('black',1000))
.then(() => delayedColorChange('green',1000))
async function rainbow(){
   await delayedColorChange('red',3000)
   console.log("hi!!");
     await delayedColorChange('orange',3000)
     await delayedColorChange('brown',3000)
     await delayedColorChange('black',3000)
     await delayedColorChange('green',3000)
     return "all done"

}
rainbow().then(()=> console.log("end of rainbow")
)
async function printRainbow( ){
    await rainbow();
    console.log("end of rainow!");
}
async function hello(){

}


const sing = async() =>{
    throw "oh  no problem"
    return 'la la la'
}
sing().then((data) =>{
    console.log("promise resolved with: ",data);
})
.catch(err =>{
    console.log("oh no , promise rejected!");
    console.log(err);
})


const login = async (username,password) =>{
    if(!username || !password ) throw ' mistake'
    if (password === 'technology') return 'welcome'
    throw 'Invalid password'
}
login('astetwrqkbhdfysrey')
.then(msg => {
console.log("loggode in!");
console.log(msg);

})
.catch(err =>{
    console.log("technology");
    console.log(err);
})
*/
