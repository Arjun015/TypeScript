// interface  ---------------

interface PersonA {
    nameG:string ; 
    age:number ; 
    greeT(word:string):void
}


type PersonB = {
    nameG:string ; 
    age:number ; 
    greeT(word:string):void
}


let userL:PersonA = {
    nameG : "Vaishali",
    age : 17 ,
    greeT: function(word:string){
        console.log(word)
    }
}
console.log(userL.greeT('hello vaishali'))
console.log(userL.age)
console.log(userL.nameG)


let userU:PersonA = {
    nameG : "Payal Jadhav",
    age : 15 ,
    greeT: function(word:string){
        console.log(word)
    }
}
console.log(userU.greeT('hello Payalee'))
console.log(userU.age)
console.log(userU.nameG)