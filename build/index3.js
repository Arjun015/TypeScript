"use strict";
// union type 
// Program 1
function mul(p, q) {
    if (typeof p == "number" && typeof q == "number") {
        console.log(p * q);
    }
    else {
        console.log(Number(p) * Number(q));
    }
}
mul(22, 44); // 968
mul('56', '87'); // 4872
// let aa1 : number|string = "45"
// let bb1 : number| string | boolean = true
let aa1 = 46;
let bb1 = false;
console.log(aa1);
console.log(bb1);
let infoU = {
    firstName: 'Ananya',
    lastName: 'kate',
    Age: 24
};
console.log(infoU);
let infoP = {
    father: "Prakash",
    mother: 'savita'
};
console.log(infoP);
// Program  5 
//------------  enum  
// let role1 = "Read"
// let role2 = "Read_and_write"
// let role3 = "watch"
var Roles;
(function (Roles) {
    Roles[Roles["Read"] = 1] = "Read";
    Roles[Roles["Read_and_write"] = 2] = "Read_and_write";
    Roles[Roles["watch"] = 3] = "watch";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var Account;
(function (Account) {
    Account[Account["saving"] = 1] = "saving";
    Account[Account["current"] = 2] = "current";
})(Account || (Account = {}));
if (Roles.Read) {
    console.log('read');
}
if (Roles.Read_and_write) {
    console.log('Read_and_write');
}
if (Roles.watch) {
    console.log('watch');
}
if (Account.current) {
    console.log('Current_Account');
}
if (Account.saving) {
    console.log('Saving_Account');
}
