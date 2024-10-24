
type User <TAge extends String | number,TCity = number > ={
    name:string;
    age : TAge,
    city: TCity
}


// const user1 : User< boolean,string> ={
//     name:"Aditya",
//     age:true,
//     city:"delhi"
// }
const user2 : User<string,string > ={
    name:"Aditya",
    age:"new",
    city:"delhi"
}

const user3 : User<string > ={
    name:"Aditya",
    age:"new",
    city:123
}
