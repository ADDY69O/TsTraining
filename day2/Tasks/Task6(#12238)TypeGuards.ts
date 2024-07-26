
// Write a type guard function that checks if a value is an instance of a class Dog. Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.

// const animals = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals));
// Output: [Dog, Dog]

class Cat {



    constructor(){
      
    }

    meow(){
        console.log(" meow");
    }


}


class Dog {



    constructor(){
     
    }

    bark(){
        console.log(" bhoow");
    }


}


//Approach1  Using Filter

function filterDogs<T> (animals:Array<T>):Array<T>{
    return animals.filter((animal )=> animal instanceof Dog );
}




const animals = [new Dog(), new Cat(), new Dog()];



// console.log(filterDogs(animals))


// Using Map
//DESC: can't perform with map function because it requires to the skip the iteration 

function getDogTypesUsingMap <T> (animals : T[]) : T[] {
    const data = animals.map((animal)=> {
        if(animal instanceof Dog){
        return animal;}
        else{
            return null;
        }
})
    return data.filter((item)=> item!==null)
}

console.log(getDogTypesUsingMap(animals))





// Using Reduce 

function getDogTypes <T> (animals : T[]) : T[] {

    return animals.reduce((acc:T[],curr:T)=>{
        if(curr instanceof Dog){
            acc.push(curr);
            return acc;
        }
        else{
            return acc;
        }
    },[] )
}


// console.log(getDogTypes(animals));