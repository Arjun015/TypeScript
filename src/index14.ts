// // Program 1 

// type mango = {
//     color : string 
//     area : string[]
// }

// type grapes = {
//     color : string 
//     mfgdate : Date
// }

// type Fruits = mango & grapes 

// let objEx : Fruits = {
//     color : "yelloGreen" , 
//     area :['Kolhapur','Nashik','Nagpur'] , 
//     mfgdate : new Date()
// }

// console.log(objEx.area)
// console.log(objEx.color)
// console.log(objEx.mfgdate)
// //console.log(objEx)



// // -------Program 2 


// type lampA = string | number 
// type lampB = boolean | number 

// type universal = lampA & lampB 

// let h1 : universal = 34
// console.log(h1)


// // ------ Program 3   

// // --------------------  TypeGuard  -----------------
// //function overloading  
// function AddAB(a:number , b:number):number
// function AddAB(a:string , b:string):string
// function AddAB(a : string , b : number):string
// function AddAB(a : number , b : string):string

// function AddAB(a : lampA , b : lampA){
//     if(typeof a == 'string' && typeof b =='number'){
//         return a.toString() + b.toString()
//     }else{
//         if(typeof a =='number' && typeof b== "number"){
//             return a + b
//         }
//     }
// }
// let abc = AddAB('Arjun','Jadhav')
// let jkl = AddAB(35,67)
// let dfg = AddAB(12,'Arjun')
// let ert = AddAB('Supriya',8)
// let sd = AddAB('Priyanka','Jadhav')

// console.log(abc , jkl , dfg , ert , sd)


//-----------  Program 4A

// type mango1 = {
//     color : string 
//     area : string[]
// }

// type grapes1 = {
//     color : string 
//     mfgdate : Date
// }

// type Fruits1 = mango & grapes 

// function printObj(apj : Fruits1){
//     console.log(apj)
// }
// printObj({color:"Green",area:['solapur','Nashik','pune'] , mfgdate :new Date})


// -----Program 4B
type mango2 = {
    color : string 
    area : string[]
}

type grapes2 = {
    color : string;
    startdate : Date
}

type Fruits2 = mango2 | grapes2 

function printObj1(apj : Fruits2){
    if('area' in apj){              // do not take common property 
        console.log(apj.area)

    }else if ('startdate' in apj){
        console.log(apj.startdate)
    }
}
printObj1({color:"Green", startdate :new Date()})
printObj1({color:"red" , area:['kolhapur','nagpur','nashik']})
