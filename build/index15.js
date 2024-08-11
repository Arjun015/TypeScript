"use strict";
// Program  1  
class Car {
    drive() {
        console.log('I am driving_ _ _ Car');
    }
}
class Truck {
    drive() {
        console.log('I am driving _ _ _Truck');
    }
    truckLoad(Quantity) {
        console.log(Quantity);
    }
}
let v1 = new Car();
let v2 = new Truck();
function driveVehicle(veh) {
    veh.drive();
    // if('truckLoad' in veh){
    //     veh.truckLoad(2000)
    // }
    if (veh instanceof Truck) {
        veh.truckLoad(46000);
    }
}
driveVehicle(v1);
driveVehicle(v2);
function animalMovement(animal) {
    let speed;
    switch (animal.type) {
        case "Egle":
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
        default:
            console.log('Incorrect');
    }
    console.log(speed);
}
animalMovement({ type: 'Egle', flyingSpeed: 50 });
animalMovement({ type: 'Horse', runningSpeed: 90 });
