interface  User {
    age:  number |undefined;
    name:string|null;
    address :{
        city:string|null,
        state:string|undefined
    }

}

type t =  keyof User;




type userTypeKeys =["age","name"]

type DefinedProperties<User> =  {
    [key in keyof User] :  
     User[key] extends object ? DefinedProperties< User[key]> : NonNullable<User[key]>;
}

// not nullable util 






type DefineExample = DefinedProperties<  User>;
// type DefineExample = DefinedProperties<  {name:string | undefined,age:number}>;


const data :DefineExample ={
    age:123,
    name:"Aditya",
    address :{
        city:"Delhi",
        state:"Alamat",
    }

}



export {}