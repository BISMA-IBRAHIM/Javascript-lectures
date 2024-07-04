//Q1: Using setTimeOut,print the string 'Hellow!' after 100ms

// async function sayHellow(){
//     setTimeout(function(){
//         console.log("Hellow");
//     },1000)
// }

//Practice 02
// function getData(dataId, getNextData){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 1000)
//     });
// }


//Practice 02
// const getPromise =()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("iam a promise");
//         //reject("Network Error");
//         resolve("success");
//     })

// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });

//Practice 03

// function async1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 01 is here");
//             resolve("success");
//         },2000);
//     });
// }
// function async2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 02 is here");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data01 ");
// let p1 = async1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data02 ");
//     let p2 = async2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// });

//Practice 04

// const randomPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const ResolveThis = Math.random()>0.5;
//         if(ResolveThis){
//             resolve("hellow world!");
//         }else{
//             reject("Error occured");
//         }
//     },2000)
// })
// randomPromise
// .then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error);
// })


// Practice 05
//  function job(){
//     return new Promise((resolve,reject)=>{
//         reject();

//     });
//  }
//  let promise = job();

//  promise.then(()=>{
//     console.log('Success 01');
//  }).then(()=>{
//     console.log('success 02');
//  }).then(()=>{
//     console.log('Success 03');
//   }).catch(()=>{
//    console.log('Error 01');
//  });



//Practice 06
// const promise = new Promise((resolve,reject)=>{
//     reject(Error('Ops Some Error Occured'));
// })
// promise.catch(error=>console.log(error.message));


//Practice 07
// const youdidIt = new Promise (( resolve , reject)=>{
//     resolve('You can do it');
// })
// youdidIt.then(
//     success => console.log(success),
//    error => console.log(error)
// ).finally(
//     ()=>console.log('all done')
// );

//Practice 08
// function one(callback){
//     setTimeout(function(){
//         console.log("Step one Completed");
//         callback();
//     },1000);
// }
// function two(callback){
//     setTimeout(function(){
//         console.log("Step Two Completed");
//         callback();
//     },1000);
// }
// function three(callback){
//     setTimeout(function(){
//         console.log("Step Three completed");
//         callback();
//     },1000);
// }
// function finalStep(){
//     console.log("all steps completed");
// }

// // NESTED Callback
// one(function(){
//     two(function(){
//         three(function(){
//             finalStep();
//         });
//     });
// });



// Practice 9
//example of callback hell
// function fetchDataFromAPI(callback){
//     setTimeout(function(){
//         console.log("STEP 01 : API data fetched");
//         const data = "sample data";
//         callback(data);
//     },1000);
// }
// function processData(data,callback2){
//     setTimeout(function() {
//         console.log("STEP 02 : Data processes");
//         const processData = data + " process"; 
//         callback2(processData);
//     },1000)
// }
// function displayResult(result, callback3){
//     setTimeout(function() {
//         console.log("STEP 03 : Result Displayed" + result);
//         callback3();
//     },1000)
// }

// //NESTED callbacks
// fetchDataFromAPI(function(data) {
//     processData(data, function(processData) {
//         displayResult(processData, function(){
//             console.log("All Steps Completed");
//         });
//     });
// });


//Practice 10
// An example of Promise.allSettled() with one promise rejected:
// const promiseArray= [
//     new Promise (resolve => setTimeout(resolve, 100, 'apple')),
//     new Promise((resolve,reject)=> setTimeout(reject,10 , 'banana')),
//     new Promise(resolve => setTimeout (resolve, 300, 'orange'))
// ]
// Promise.allSettled(promiseArray)
// .then(fruits => console.log(fruits))
// .catch(error=> console.log('Error:', error))


//Practice 11 
const numbrArray =[
    new Promise (resolve=> setTimeout(resolve , 100, '100k')),
    new Promise ((resolve , reject) => setTimeout(reject , 90 ,'200k')),
    new Promise (resolve => setTimeout(resolve, 20, '300k'))
]

Promise.allSettled(numbrArray)
.then(numbers => console.log(numbers))
.catch(error => console.log('Error', error))