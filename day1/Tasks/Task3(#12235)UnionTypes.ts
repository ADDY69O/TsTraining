// Create a function that takes a parameter which can either be a string or a number. The function should return the parameter as a string.

// Complete stringify method :

// console.log(stringify(123)); 
// Output: "123"

// console.log(stringify('hello')); 



function stringify (value : string | number):string{
    if(typeof value === 'number'){
        return JSON.stringify(value);
    }
    return value;
}   

console.log(stringify("hello"))