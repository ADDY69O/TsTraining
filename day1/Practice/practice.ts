// example 1

// type User={
//     lname:string,
//     firstName?:string
//     dob:number
// }

// type data = keyof User


// const userProp : data ="dob" 




// //example 2

// const user = {
//     firsName:"Aditya",
//     lastName:"Kumar",
//     age:22
// }

// type User2 = typeof user;

// type data2 = keyof User2


// const userProp2 : data2 ="lastName" 



// example 3

// const user = {
//     firsName:"Aditya",
//     lastName:"Kumar",
//     age:22
// }


// type data2 = keyof typeof user;


// const userProp2 : data2 ="lastName" 




// using record of type defination

// here | pipe represents that it requires both firstName and the LastName as the key
// type dataRecordType = Record<"firstName" | "lastName","NULL"|number>;

// const newData :dataRecordType ={
//     firstName:"NULL",
//     lastName:"NULL",
//     commonName:12,
// }


// type user ={
//     [key:string]:string
// }



// example 4


// type user = {
//     firstName:string,
//     lastName:string,
//     age:number
// }

// It makes all the feilds optional 
// type newUserType = Partial<user>

// const data :newUserType = {
// }



// example 5


// type user = {
//     firstName:string,
//     lastName:string,
//     age:number
// }

// & is used for getting the whole data and value 
// type newUserType = Record<'a'|'b'|'c',string> & Record<'d',"hello"> 

// const data :newUserType = {
//     a:"abc",
//     b:"abc",
//     c:"abc",
//     d:"hello"

// }



// example 6


// type user = {
//     a:string,
//     b:string,
//     c?:string
// }


// type newUserType = Required<user>

// const data :newUserType = {
//     a:"abc",
//     b:"abc",
//     c:"abc"

// }



// example 7


// type user = {
//     a:string,
//     b:string,
//     c?:string
// }


// type newUserType = Omit<user,"b">

// const data :newUserType = {
//     a:"abc",
//     c:"abc"

// }


// example 8


// type user = {
//     a:string,
//     b:string,
//     c?:string
// }


// type newUserType = Omit<user,"b" | "a">

// const data :newUserType = {
//     c:"abc"

// }


// example 9



// type user = {
//     a:string,
//     b:string,
//     c?:string
// }


// type newUserType = Pick<user,"b" | "a">

// const data :newUserType = {
//    a :"a",
//    b : "b"

// }



// Example 10


// type name = "firstName" | "lastName";

// type name2 = Exclude<name,"lastName">













