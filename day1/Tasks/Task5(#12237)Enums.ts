// Define an enum Direction with values Up, Down, Left, and Right. Then, create a function that takes a Direction value and returns a string representing the direction.

// Complete Below Method

// console.log(getDirection(Direction.Up)); // Output: "Up"


enum Directions {
    Up,
    Down,
    Left,
    Right
}

let mapping :string[]=["Up", "Down", "Left", "Right"];

function getDirections(n:number):string{
    return mapping[n];
}

console.log(getDirections(Directions.Up))