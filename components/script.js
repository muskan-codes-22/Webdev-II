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
let num=0;
const interval=setInterval(() => {
    num+=1
    console.log(num)
    if(count===10){
        clearInterval(interval)

    }
},1000) 
    
    




