"use strict";
// Generics  
// Program  1
let names = ['Arjun', 'Harish', 'vishal'];
let q1 = names[0].toUpperCase();
console.log(q1);
let Computer = ['Mouse', "Moniter", "KeyBoard"];
let q2 = Computer[2].toLowerCase();
//console.log(Computer)
console.log(q2);
// Program 2  
// Promise
let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Hello');
    }, 2000);
});
pro.then(function (e) {
    console.log(e.includes('h'));
});
// Program 3
function merge(objectOne, objectTwo) {
    return Object.assign(objectOne, objectTwo);
}
let qq = merge({ fname: 'Mrunal' }, { age: 23 });
let rr = merge({ rollno: 45 }, { stdName: 'Ajay Parera' });
//console.log(qq)
// let qw = qq.fname
// let qe = qq.age
let qw = rr.rollno;
let qe = rr.stdName;
function countAndDiscribe(element) {
    console.log(element.length);
}
countAndDiscribe('hello Arjun'); // 11 
countAndDiscribe(['Arpita', 22, 34, 44, true]); // 5 
countAndDiscribe(['12', 22, 'Sara', 'Swaragini', 'sanchit', 'chinmaySir']); // 6
function findSize(elet) {
    console.log(elet.size);
}
findSize(new Set(['Kalyani', 12, 33, 'Arjun'])); // does not return any value , It return 'undefined'
findSize(new Map([[1, 'Sanket'], [2, 'Ravina']])); //// does not return any value , It return 'undefined'
//console.log(ee)
//console.log(ss1)
// This is restricted for any array and string
// type Sa = any[]|string
// function countAndDescribe(element:Sa){
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([11,22,33,44,55,66])
// countAndDescribe(10)
// Program 5 
let a11 = 234;
let objt = {
    45: "welcome Arjun"
};
console.log(objt);
// Program 6
//as we pass object 
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
// Program 7
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItems(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getArray() {
        console.log(this.data);
    }
}
let ass1 = new DataStorage();
console.log(ass1.addItem(11));
console.log(ass1.addItem(23));
console.log(ass1.addItem(45));
console.log(ass1.getArray());
console.log(ass1.removeItems(45));
console.log(ass1.getArray);
console.log(ass1);
