


type objSingnature ={
    [key:string] : string|number|string[]|number[]|object;
}

type objSingnature2 ={
    [key:string] : string|number;
}

let newUser  ={
    name:"Aditya",
    age:21,
    course:"btech",
    branch:"cse",
    address:{
        state:"delhi",
        country:"India",
        city:"Mohan Estate",
        pincode:"110044",
        locality:{
            name:"delhi",
            pincode:"110044",
            nearestSchool:888
        }
    }   
}






// // type Path<T> = {
// //     [D keyof T]: D extends Object ? T : T
// // }
// const flatGet =<T extends Object = Object > (obj:T,key:keyof T):string | number =>{
  
//     for(let objKey in obj){
//         if(objKey === key){
//             return obj[objKey] as T[objKey];           
//         }
//     }
  
//         return "ERROR NOT FOUND";

// }

// const deepGet = <T extends objSingnature> (obj:any,key:string|string[]):string | number | number[] | string[] | object =>{
// let keys:string[]=[];
// if(typeof key === "string"){
//      keys = key.split(".");
// }
// else{
//     keys = key
// }



// for( let ele of keys){

//     if(ele in obj){

//         if(typeof obj[ele] === "string"){
//             return obj[ele];
//         }
//         else if(typeof obj[ele] === "object"){
//             obj = obj[ele];
//         }

//     }
//     else{
//         return "ERROR NOT FOUND"
//     }

// }   

// return "ERROR not FOund";

// }


// console.log(deepGet<objSingnature>(newUser,"address.locality.pincode"))

// console.log(flatGet(newUser,''))
