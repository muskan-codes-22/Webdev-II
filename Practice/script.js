// function homework(callback){
//     console.log("Doing homeworK");
//     setTimeout(() => {
//         console.log("Homework is done");
//         callback();
//     }, 2000);
// }

// function play(){
//     console.log("Going to Play");
// }
// homework(play); //callbcak function

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Action completed after ${ms} ms`);
//     }, ms);
//   });
// }

// delay(2000).then((msg) => {
//   console.log(msg);
// });

// function fetchData() {
//   return new Promise((ressolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//       if (success) {
//         ressolve("Data fetched successfully");
//       } else {
//         reject("Failed to fetch data");
//       }
//     }, 1000);

//   });
// }
// console.log('starting fetching data');
// fetchData()
// .then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.error(error);
// });

// async function getgreeting() {
//   return "Hello, from async function!";
// }
// console.log("calling the function")
// getgreeting()
// .then((data) =>{
//   console.log("recieved",data);
// });
// console.log("function call intiated")

// async function getTodo(){
//   try{
//     let response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data =await response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log("Error:",error);
//   }
// }
// getTodo(); 
//  console.log("start");
//  function hello(callback){
//   setTimeout(() => {
//     console.log("hello after 2 second")
//     callback();
//   }, 2000);
// }
// function end(){
//   console.log("end");
// }
// hello(end);

// document.getElementById("main-text").style.color = "red";
// document.getElementById("main-text").style.fontSize = "24px";

// const hoverBox = document.getElementById("hover-box");
// hoverBox.addEventListener("mouseover", () => {
//     hoverBox.style.backgroundColor = "lightblue";
// });

// hoverBox.addEventListener("mouseout", () => {
//     hoverBox.style.backgroundColor = "white";
// });

// const keyInput = document.getElementById("key-input");
// keyInput.addEventListener("keydown ", function(event){
//     alert("Key pressed:" +  event.key);
// });

// let num=1
// let interval = setInterval(() => {
//     console.log(num);
//     num++;
//     if (num > 10) {
//         clearInterval(interval);
//     }
// }, 1000);

function data(){
    return new Promise ((resolve, reject) =>{
        let success = true;
        setTimeout(() => {
            if(success){
                resolve("Data fetched successfully");
            }
            else{
                reject("Failed to fetch data");
            }
        },2000);    

    })
}

data()
.then((message) => {
    console.log(message);
    
})
.catch ((error) => {
    console.error(error);
})
.finally (() => {
    console.log("Data fetch attempt completed");
});