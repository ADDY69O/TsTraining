
// example 1:
type nameType  = "Aditya"

let commonName : nameType = "Aditya";






// exaple 2

let num1 = 2;
let num2 = "3";

var sum:string = num1 + num2;

console.log(sum);




// example 3


// let myNum : number = 3;

// let numInString = myNum as unknown 

// numInString = "aditya";

// console.log(numInString);

// num.toUpperCase();a
  




//exampel 4

let myNum : number = 3;

let numInString = myNum as unknown

let array : Array<number> =[];

let array2 : number[]=[];

array.push(1);

array2.push(1);
array2.push(2);
array2.push(3);

console.log(array2)

numInString = array

console.log(numInString);




// example 5


let fruits : (string | number)[] = [];

fruits.push("apple");
fruits.push(123);
fruits.push("banana")
console.log(fruits)




// example 6

type addType = (n: number,m:number) =>number

const add:addType = (n,m)=>{
    return n+m;
} 
var sum2 = add(5,6);

console.log(sum2)



//example 7

type addType2 = (n: number,m:number) =>number

const add2:addType2 = function (n,m) :number{
    return n+m;
} 
const sum3 = add2(5,6);

console.log(sum3)



//example 8
function createUser ({name:string,phoneNo :number}):{}{
    console.log(this.name,this.phoneNo)
    return {}

}

//working in vs but showing error in online playground 

createUser({name:"Aditya",phoneNo:123456})




//example 9
type Point ={
    x:number,
    y:number,
    radius:number
}

function drawCircle(obj:Point):number{
    return obj.x + obj.y
}

console.log(drawCircle({x:12,y:12,radius:20}));



export {}