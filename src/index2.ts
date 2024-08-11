// Program 1

//function addition(x:number , y:number){
//     console.log(x+y)
// }
// addition(34,67)

//import { StringifyOptions } from "querystring";


// Program 2

// function add(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }else{
//         console.log("please enter correct input")
//     }
// }
// add(45,21)

// Program 3

//------ function-----

//=>  void : void not returning anything ====> donot use return key word

// function addition1(x:number , y:number):void{
//     console.log(x+y)
// }
// let a = addition1(67,54)
// console.log(a)

function addition1(x:number , y:number):undefined{
    console.log(x+y)
    return
}
let aa = addition1(67,54)
console.log(aa)



// Program 4   
/*
function Add(x:number , y : number , result:boolean , greet:string):number{
    if(result){
        console.log(greet)
        console.log(x+y)
        return x + y
    }else{
        return 0 
    }
   
}
let dd = Add(12,14,true,"Good...Morning!")
console.log(dd)

*/


// Program 5   

// type => object  
/*

let infoS:object = {
    firstName : "Aanand",
    lastName : "Mehra",
    age : 45 
}
console.log(infoS)

console.log('======###########=======')


// Program 6 

let infoZ : {
    firstName : string ,
    lastName : string , 
    age : number 

} = {
    firstName : "Ms",
    lastName : 'Dhoni',
    age : 40
}
console.log(infoZ)

*/


// concat   


type ff = {
    firstName : string , 
    lastName  : string , 
    age : number , 
    isMarried : boolean
}

type con = {
    firstName : string , 
    lastName  : string , 
    mobNo : number , 
    boln : boolean
}

let obj : ff = {
    firstName : "Arjun",
    lastName : "Jadhav",
    age : 23 ,
    isMarried : false
}
console.log(obj)


let obj1: con = {
    firstName : "Arjun",
    lastName : "Jadhav",
    mobNo: 8453567366 ,
    boln: true
}
console.log(obj1)


// Program 6 
// Array 

let num:number[]=[12,23,12]
let name1:string[] = ['Mahesh',"Vaishali","Arjun"]
console.log(num)
console.log(name1)


// Program  7   

// -----------  tuple  ------------

let marks:[x:number , y:number] = [23,44]
marks.push(34,43)
console.log(marks)

