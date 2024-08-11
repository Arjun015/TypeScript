"use strict";
// Program 1
//function addition(x:number , y:number){
//     console.log(x+y)
// }
// addition(34,67)
//import { StringifyOptions } from "querystring";
// Program 2
// function add(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }else{
//         console.log("please enter correct input")
//     }
// }
// add(45,21)
// Program 3
//------ function-----
//=>  void : void not returning anything ====> donot use return key word
// function addition1(x:number , y:number):void{
//     console.log(x+y)
// }
// let a = addition1(67,54)
// console.log(a)
function addition1(x, y) {
    console.log(x + y);
    return;
}
let aa = addition1(67, 54);
console.log(aa);
let obj = {
    firstName: "Arjun",
    lastName: "Jadhav",
    age: 23,
    isMarried: false
};
console.log(obj);
let obj1 = {
    firstName: "Arjun",
    lastName: "Jadhav",
    mobNo: 8453567366,
    boln: true
};
console.log(obj1);
// Program 6 
// Array 
let num = [12, 23, 12];
let name1 = ['Mahesh', "Vaishali", "Arjun"];
console.log(num);
console.log(name1);
// Program  7   
// -----------  tuple  ------------
let marks = [23, 44];
marks.push(34, 43);
console.log(marks);
