"use strict";
class Nature {
    constructor(nm) {
        this.LifeTreeYr = 50;
        this.name = nm;
    }
    greetT(word) {
        console.log(`${word} ${this.name}`);
    }
    display() {
        console.log('hi Arjun');
    }
}
let ass = new Nature('Mango_Tree');
console.log(ass);
console.log(ass.LifeTreeYr);
console.log(ass.display);
class Flower {
    constructor(nmm) {
        this.lifeF = 30;
        this.name = nmm;
    }
    look(wordd) {
        console.log(`${wordd} ${this.name}`);
    }
}
let dff = new Flower('Rose');
console.log(dff.lifeF);
console.log(dff.look('Love'));
console.log(dff);
