// let result = function(score){
//     return new Promise(function(resolve,reject){
//         console.log("Calculation results-----")
//         if(score>50)
//             resolve("Congratulation you did it")
//         else{
//             reject("You are failed to do this")
//         }
//     })
// }
// let grade = function(response){
//     return new Promise(function(resolve,reject){
//         console.log("calculating your Grade---")
//         resolve("Your grade is A"+response)
//     })
// }
// result(80).then(response=>{
//     console.log("result is recieved ")
//     return grade(response)
// }).then(finalgrade =>{
//     console.log(finalgrade)
// }).catch(error =>{
//     console.log(error)
// })



// async function calculateResult(){
//     try{
//         const response = await result (20 )
//         console.log("result recieved")
//         const finalgrade = await grade(response)
//         console.log(finalgrade)
//     }catch(error){
//         console.log(error)
        
//     }
// }
// calculateResult()

// function learnThis(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             const learnThis = true;
//             if(learnThis){
//                 resolve("you can learn this.");
//             }else{
//                 reject("no you dont learn this");
//             }
//         },100)
//     })
// }

//Practice Q
// async function walkdog(){
//     return new Promise((resolve,reject)=> {
//         setTimeout(() =>{

//             const dogwalked = true;
//             if (dogwalked){
//                 resolve("You walked the dog ");
//             }else{
//                 reject("You didnt walked the dog");
//             }
//         },1500)
//     })
// }

// async function youPlayAsong(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {

//             const youPlayAsong = true;
//             if(youPlayAsong){
//                 resolve( " you  play a song");

//             }else{
//                 reject("you didnt  play a song")
//             }
//         }, 1500)
//     })
// }
// async function youEatThis(){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{

//             const youEatThis = true;
//             if(youEatThis){
//                 resolve("YEs you eat this");

//             }else{
//                 reject("no you didnt eat this");
//             }
//         },1500)
//     })
// }

// async function doChores(){

//     const walkdogResult = await walkdog();
//     console.log(walkdogResult);

//     const youPlayAsongResult = await youPlayAsong();
//     console.log(youPlayAsongResult);
    
//     const youEatThisResult = await youEatThis();
//     console.log(youEatThisResult);

//     console.log("You have done all the tasks");
// }


// doChores()

//Practice Q
// function getData(dataId){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }

//  async function getAllData() {
// console.log("getting data 01")
//     await getData(1);
//     console.log("getting data 02")
//     await getData(2);
//     console.log("getting data 03")
//     await getData(3);
//     console.log("getting data 04")
//     await getData(4);
//     console.log("getting data 05")
//     await getData(5);
//     console.log("getting data 06")
//     await getData(6);
// }


//Practice Q:
// function resolveThis(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//                  resolve('resolved')
//         }, 2000)
//     });
// }

// async function asyncCall(){
//     console.log('calling');
//     const result = await resolveThis();
//     console.log(result);
// }
// asyncCall();


//Practice 11
// async function hellowWorld(){
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//          const json = await response.json();
//          console.log(json)
//     }catch(error){
//         console.log(error);
//     }
// }


// hellowWorld();


// async function doThisWork() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const doThisWork = true;
//         if (doThisWork) {
//           resolve("work is done");
//         } else {
//           reject("work is not done");
//         }
//       }, 1000);
//     });
//   }
  
//   async function youPaintThis() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const youPaintThis = true;
//         if (youPaintThis) {
//           resolve("your painting is done");
//         } else {
//           reject("your painting is not done");
//         }
//       }, 1500);
//     });
//   }
  
//   async function youBrokeAglass() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const youBrokeAglass = true;
//         if (youBrokeAglass) {
//           resolve("you broke glass");
//         } else {
//           reject("you did`nt break glass");
//         }
//       }, 2000);
//     });
//   }
  
//   async function youDidIt() {
//     const doThisWorkResult = await doThisWork();
//     console.log(doThisWorkResult);
  
//     const youPaintThisResult = await youPaintThis();
//     console.log(youPaintThisResult);
  
//     const youBrokeAglassResult = await youBrokeAglass();
//     console.log(youBrokeAglassResult);

//     console.log("You done all work ....")
//   }
//   youDidIt();
  


//Practice


// (async function(){
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
//         const json = await response.json();
//         if(json.userId ==1){
//             json.completed == false;

//         }else{
//             json.completed == true;
//         }
//         console.log(json);
// } catch (error){
//     console.log(error);
// }
//     })();


// Practice 
//  let promise = new Promise((resolve , reject0)=>{
// setTimeout(()=>{
//     resolve('Promise resolved')
// }, 1000);

//  })
//  async function asyncFunc(){
//     let result = await promise;
//     console.log(result);
//     console.log('hellow');
//  }
//  asyncFunc();

//Practice 

// let Patience = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Indeed ALLAH is with those who paitently endure')
//     }, 1000)
// })

// async function asyncFunc(){
//     let result = await Patience;
//     console.log(result);
//     console.log(' SO why are you taking this worldy life seriously ')
// }
// asyncFunc();


//Practice 
// then method
// let reciteThis = new Promise ((resolve, reject)=>{
//     resolve("Indeed in the remembrance of Allah do heart find peace");
// });

// reciteThis
// .then(function successValue(result){
//     console.log(result);
// })
// .then(function successValue1(){
//     console.log("so where are you going ???")
// })

//Practice 
// let countValue = new Promise((resolve , reject)=>{
//     reject('PRomise rejected');
// });

// countValue.then(
//     function successValue(result){
//         console.log(result);
//     },
// )
// .catch(
//     function errorValue(result){
//         console.log(result);
//     });

//Practice 
// let countNum = new Promise ((resolve , reject)=>{
//     resolve('Promise resolve');
// })
// countNum.finally(
//     function greet(){
//         console.log('This code is executed.');
//     }
// );

//Practice 

// function showTime(){
//     let dateTime = new Date();
    
//     let time = dateTime.toLocalTimeString();
//     console.log(time)

//     setTimeout(showTime, 2000);
// }
// showTime();

// Practice 

let promise1;
let promise2;
let promise3;

async function asyncFunc(){
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;


    console.log(result1);
    console.log(result2);
    console.log(result3);

    
}