"use strict";
//----------------- Decorators --------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators => The perpose of decorators is You want to execute something before executing 
//               the class object
// Program 1 
function Logger(constructor) {
    console.log('......Supperb');
    console.log(constructor);
}
let PersonAPJ = class PersonAPJ {
    constructor() {
        this.nameC = "Mazza";
        console.log('Welcome in My country');
    }
};
PersonAPJ = __decorate([
    Logger
], PersonAPJ);
let qwerty = new PersonAPJ();
// Program 2 
// -------------- Decorators factories ------------------------
function Logger2(bb) {
    return function (constructor) {
        console.log('Hello');
        console.log('Bye');
        console.log(bb);
    };
}
let PersonAN = class PersonAN {
    constructor() {
        this.nameC = "Mazza";
        console.log('Welcome_ _ _ ARJUN');
    }
};
PersonAN = __decorate([
    Logger2('---- Alert Arjun ------Before class ----')
], PersonAN);
let qwerty1 = new PersonAN();
