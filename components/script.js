// console.log('we will right code')

// debugger
// console.log(a)
// var a=3453
// let b=456;
// console.log(a)
// console.log(b)

// function test(){
//     let c=40
//     console.log("inside fn")
// }
// test()
// let total=345;

// console.log("this is the beginning of script.js file")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000);
// console.log("this is the end of script.js file")

// const interval=setInterval(() => {console.log("printing at every 2 seconds")}, 2000);
// setTimeout(() => {clearInterval(interval)},10000);
// const timeout=setTimeout(() => {console.log("after 2 second")},2000);
// clearTimeout(timeout);
// let num=0;
// const interval=setInterval(() => {
//     num+=1
//     console.log(num);
//     if(num===10){
//         clearInterval(interval)

//     }
// },1000) 
    
// const taskName=document.querySelector("#name")  
// const button=document.querySelector(".btn")  
// const list=document.querySelector(".list")

// button.addEventListener("click",()=>{
//     // #creating the element
//     const li=document.createElement("li")
//     const deleteButton=document.createElement("button")

//     // providng value to the elements
//     li.innerText=taskName.value
//     deleteButton.innerText="Delete" 
//     deleteButton.addEventListener("click",()=>{
//         // li.remove()
//         list.removeChild(li)
//     })
//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     taskName.value=""
// })   


// console.log("starting homework");

// setTimeout(() => {
//   console.log("homework done!");
//   console.log("starting dinner");

//   setTimeout(() => {
//     console.log("dinner done!");
//     console.log("getting ready to go out");

//     setTimeout(() => {
//       console.log("going to playground");
//     }, 1000);

//   }, 2000);

// }, 3000);
   
// function finishHomework(callback){
//     console.log("starting homework");
//     setTimeout(() => {
//       console.log("homework done!");
//       callback();
//     }, 2000);
// }

// function haveDinner(callback){
//     console.log("starting dinner");
//     setTimeout(() => {
//       console.log("dinner done!");
//       callback();
//     }, 2000);
// }
// function goToPlayground(){
//     console.log("going to playground");
// }
//     haveDinner(()=>{
//         finishHomework(()=>{
//             goToPlayground();
//     }); 
// });

// const p= new Promise((resolve,reject)=>{
//     console.log("going to do homework")
//    setTimeout(() => {
//     const done=true;
//     if(done){
//         resolve("success")
//     }else{
//         reject("failed to fetch data form server")
//     }
// },3000)

// })
// p.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("promise is settled")
// })

// // i dont understand this study again
// console.log("starting homework");
// function dohomework(){
//     return p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("homework completed")
//                 resolve("homework done")
//             }else{
//                 reject("homework not done")
//             }

//         },2000);     

//     })
    
// }  
  
// function eatdinner(){
//     return p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("dinner completed")
//                 resolve("dinner done")
//             }else{
//                 reject("dinner not done")
//             }

//         },2000);     

//     })
// }
// function goToPlayground(){
//     return p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("going to playground")
//                 resolve("going to playground")
//             }else{
//                 reject("not allowed")
//             }

//         },2000);     

//     })
// }

// dohomework()
// .then((data)=>{
//     console.log(data)  
//      return eatdinner() 
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// })

function orderfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("food ordered")
            resolve()
        }, 2000);
    })
}

function preparefood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("food prepared")
            resolve()
        }, 2000);
    })
}

function deliverfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("food delivered")
            resolve()
        }, 2000);
    })
}

async function foodOrder(){
    await orderfood()
    await preparefood()
    
    await deliverfood()

    console.log("food is ready to eat")
}
foodOrder()