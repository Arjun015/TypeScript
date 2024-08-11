// Program 1 

function Logger1(logString:string){
    return function(constructor:Function){
        console.log(logString)
        console.log(bb)
    }
}

function withTemplate(template:string , idatt:string){
    return function(constructor : any){
        let r = document.querySelector(`#${idatt}`)
        let pq = new constructor()

        if(r){
            r.innerHTML = template
            document.write(pq.nameAC)
        }
    }
}
@withTemplate('<h1> Hello i am new to Js<h1>','one')
class PersonA {
    nameAC:string = "ARJUN JADHAV" 

    constructor(){
        console.log('MY Farming in very wonderful')
        console.log('------Minskole-------')
    }
}
let qwerty3 = new PersonA()