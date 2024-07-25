// Define an interface Person with properties name (string) and age (number). Then, create a function that takes a Person object and returns a string in the format: "Name: <name>, Age: <age>".

// Complete describePerson Function :

// console.log(describePerson({ name: 'Alice', age: 30 })); 

// Expected Output: "Name: Alice, Age: 30"

interface Person  {
  name:string,
  age:number
}

function describePerson({name:string, age:number}):string{
    return `"Name: ${this.name}, Age: ${this.age}"`
}

console.log(describePerson({name:"Aditya", age:30}))