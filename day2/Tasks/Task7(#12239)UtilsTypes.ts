interface  User {
    age:  number |undefined;
    name:string|null;

}

type t = keyof User;

type userTypeKeys =["age","name"]

type DefinedProperties< User> =  Record< keyof User,NonNullable<User[keyof User]>>





type DefineExample = DefinedProperties<  User>;
// type DefineExample = DefinedProperties<  {name:string | undefined,age:number}>;


const data :DefineExample ={
    age:123,
    name:"Aditya"

}



export {}