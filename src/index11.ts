interface Tree {
    name:string ; 
    greetT(word:string):void
}

class Nature implements Tree {

    name: string 
    LifeTreeYr:number =  50 

    constructor(nm : string ){
        this.name = nm
        
    }
    greetT(word: string): void {
        console.log(`${word} ${this.name}`)
    }
    display(){
        console.log('hi Arjun')
    }

}
let ass:Nature = new Nature('Mango_Tree')
console.log(ass)
console.log(ass.LifeTreeYr)
console.log(ass.display)


// Program 2 -----------



interface Rose {
    name:string ; 
    look(wordd:string):void
}

class Flower implements Rose {
    name:string ; 
    lifeF :number = 30 

    constructor(nmm:string){
        this.name = nmm
    }

    look(wordd: string): void {
        console.log(`${wordd} ${this.name}`)
    }



}

let dff:Flower = new Flower('Rose')
console.log(dff.lifeF)
console.log(dff.look('Love'))
console.log(dff)

