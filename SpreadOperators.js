
//Spread OPerators

// add elements of an exisiting array into a new array
//Spread operators doing the concat jobs.
var myLibrary =['ALgorithems and Data Structure', 'Front End Lbraries'];

var Certifications =['Reponsive web design', 'Applications','APIs and MicroServices', 'Quality Assurance and Information Security', ...myLibrary];
console.log(Certifications);


//Example 02: 
let arry1 = ['a', 'c'];
let arry2 = [...arry1,'d','e','f'];

console.log(arry2);

//Example 03:
let cars=[1,2,3,4,-5];

console.log(Math.min(...cars));//Math.max returns 4;

//Examle 04:
const user1 ={
    name: 'Bisma',
    age:20,
};
const user2={
    Nationality:"Pakistani",
    Religion: "Muslim"
};
const data={...user1, ...user2};
console.log(data);






// pass element of an arrays as arguments to a function.
//Examle no:1
function addThreeNumbers(x,y,z){
    console.log(x+y+z)
}
var args = [0,1,2,2];
addThreeNumbers(...args);


//Example no:o2

function Sum(x,y,z){
    console.log(x+y+z);
}
var argument =[6,3,4,5];
Sum(...argument);


//Example no:03
function myarray(x,y,z){}
const args1 = [0,1,2];
myarray(...args1);


//Get SUM of an aarry 
function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(`Your total is $${total}`);

//Get average of an array
function getAverage(...numbers){
    let result=0;
    for(let number of numbers){
        result += number;
    }
    return result/ numbers.length;
}
const total1 = getAverage(20,75,80,50,60);
console.log(total1);



// Copy arrays 
var arr = [1,2,3];
var arr2 =[...arr];
arr.push(89);
console.log(arr);
console.log(arr2);


// Concatenation of arrays
var array1 = [2,3,4,5,6];
    var array =[7,8,9,10];
    //array1.concat(array)
    array1 = [...array1,...array];
    console.log(array1);


//Rest Operators : Condense miltiple elements into an array

    function multiply(miltiplier, ...theArgs){
        return theArgs.map(function(element){
            return miltiplier * element;
        });
    }
    var arr = multiply(2,1,2,3);
    console.log(arr);

    //Example :01

    const arr5 = [1,2,3,4,5,6];

    const first = arr5[0];
    const rest = arr5.slice(1);

    console.log("First Element : ", first);
    console.log("Rest of the element :", rest);


//Spread Operator with object 
let obj1 = { x :1, y : 2};
let obj2 = {z :3};

let obj3={...obj1,...obj2};

let obj4 =(obj1, obj2);

console.log("obj3 = ", obj3);
console.log("obj4 = ", obj4);


//Destructuring 

let head ={
    name: "Bisma",
    Company : "XYZ",
    address : "ABC"
}
//console.log({...head})
// console.log({...head, name: "VAriable", company: "ABS"})//This will print With changes
console.log({ name: "VAriable", company: "ABS",...head})//This will print without changing 

//SPread operator inside array 
let fruits =["Apple", "Banana", "cherry"];

let moreFruits = ["Kevi", "Leechi",...fruits,"Mango"];
let fruits2 =["Dragon Fruit", ...fruits,"Berry"];
console.log(moreFruits);
console.log(fruits2);

//example

let printArray = function(...args){
    console.log(args);

}
//Pass single arrays.
printArray(3);

//Pass multiple arguments.
printArray(4,5,6,7);