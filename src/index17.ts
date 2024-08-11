//----------------- Decorators --------------------------------

// Decorators => The perpose of decorators is You want to execute something before executing 
//               the class object

// Program 1 
function Logger(constructor:Function){
     console.log('......Supperb')
     console.log(constructor)
     
}

@Logger
class PersonAPJ {
    nameC = "Mazza" 

    constructor(){
        console.log('Welcome in My country')
    }
}
let qwerty = new PersonAPJ()


// Program 2 

// -------------- Decorators factories ------------------------

function Logger2(bb:string){
    return function(constructor:Function){
        console.log('Hello')
        console.log('Bye')
        console.log(bb)
    }
}

@Logger2('---- Alert Arjun ------Before class ----')
class PersonAN {
    nameC = "Mazza" 

    constructor(){
        console.log('Welcome_ _ _ ARJUN')
    }
}
let qwerty1 = new PersonAN()
