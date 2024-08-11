"use strict";
// // Program 1 
function printObj1(apj) {
    if ('area' in apj) { // do not take common property 
        console.log(apj.area);
    }
    else if ('startdate' in apj) {
        console.log(apj.startdate);
    }
}
printObj1({ color: "Green", startdate: new Date() });
printObj1({ color: "red", area: ['kolhapur', 'nagpur', 'nashik'] });
