
const objData ={
    name:"Aditya",
    course:"Btech",
    branch:"cse"
} as const;

type keyType =  typeof objData;
