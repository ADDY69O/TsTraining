// Write a function that takes an array of numbers and returns a new array where each number is doubled. Use TypeScript to define the function's parameter and return type.

// console.log(doubleArray([1, 2, 3]));
// Output: [2, 4, 6]




let array: number[] = [1, 2, 3];

function doubleArray(arr: number[]): number[] {
  return arr.reduce((acc:number[], currentItem:number) => {
    acc.push(currentItem * 2);
    return acc;
  }, []);
}

console.log(doubleArray(array));
