
// union type 

// Program 1

function mul(p:number|string , q : number|string){
    if(typeof p == "number" && typeof q == "number"){
        console.log(p * q)

    }else{
        console.log(Number(p) * Number(q))

    }
}
mul(22,44) // 968
mul('56','87') // 4872


// Program 2

// union

type result = number|string|boolean
// let aa1 : number|string = "45"
// let bb1 : number| string | boolean = true

let aa1:result = 46
let bb1: result = false

console.log(aa1)
console.log(bb1)



// Program 3 

//literals

type firstName = 'Arjun'| 'Ananya' | 'Anjali'
type lastName = 'Jadhav'| 'kate' | 'mane'
type Age = 45 | 24 |29

let infoU : {
    firstName : firstName
    lastName : lastName
    Age : Age
} = {
    firstName : 'Ananya',
    lastName : 'kate',
    Age : 24
}
console.log(infoU)



// Program 4 

// type 

type parents ={father : string , mother :string}

let infoP:parents = {
    father : "Prakash",
    mother : 'savita'
}
console.log(infoP)


// Program  5 

//------------  enum  

// let role1 = "Read"
// let role2 = "Read_and_write"
// let role3 = "watch"


enum Roles {
    "Read" = 1,
    "Read_and_write",
    "watch",
    "customer"
}

enum Account {
    "saving"=1 , 
    "current"
}

if(Roles.Read){
    console.log('read')
}
if(Roles.Read_and_write){
    console.log('Read_and_write')
}
if(Roles.watch){
    console.log('watch')
}
if(Account.current){
    console.log('Current_Account')
}
if(Account.saving){
    console.log('Saving_Account')
}



