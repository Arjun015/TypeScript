"use strict";
// Program 1 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger1(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(bb);
    };
}
function withTemplate(template, idatt) {
    return function (constructor) {
        let r = document.querySelector(`#${idatt}`);
        let pq = new constructor();
        if (r) {
            r.innerHTML = template;
            document.write(pq.nameAC);
        }
    };
}
let PersonA = class PersonA {
    constructor() {
        this.nameAC = "ARJUN JADHAV";
        console.log('MY Farming in very wonderful');
        console.log('------Minskole-------');
    }
};
PersonA = __decorate([
    withTemplate('<h1> Hello i am new to Js<h1>', 'one')
], PersonA);
let qwerty3 = new PersonA();
