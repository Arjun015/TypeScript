"use strict";
//Program 1 
let x = 10;
console.log(x);
// Program 2 
/*
function addition(x,y){
    console.log(x+y)
}
//addition('2','4')
addition(7+8)
*/
// Program 3 
/*
function add(x,y){
    if(typeof x =='number' && typeof y =='number'){
        console.log(x+y)
    }else{
        console.log('incorrect_Output')
    }
}
add('3','4')
add(3,4)
*/
// Program 4
function Addition(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
        console.log(result);
    }
}
Addition(30, 40, true, "Engineer");
// Program 5 
function AddZ(x, y, result, message) {
    if (result) {
        console.log(x + y);
        return x + y;
    }
    else {
        return 0;
    }
}
let summ = AddZ(45, 22, true, "nice_one");
console.log(summ);
// Program 6 
// object
let student = {
    firstName: "Arjun",
    lastName: "Jadhav",
    Age: 23
};
console.log(student);
// Program 7
let info = {
    firstName: "Aanand",
    lastName: "Jadhav",
    age: 34
};
console.log(info);
// Program 8
let info2 = {
    firstName: "saniya",
    lastName: "mehra",
    std: 5
};
