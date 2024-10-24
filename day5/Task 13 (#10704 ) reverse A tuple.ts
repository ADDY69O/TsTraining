const arr : TupleType = [42, 'hello', true];

// type TypeOfArray =  typeof arr; 

type TupleType = [number, string, boolean];


type ReverseType<T> = 
T extends [infer head , ...infer Tail] ? [...ReverseType<Tail>,head] : T
 



type NewReverseType = ReverseType<TupleType>


// const reversedTuple = reverseTuple(arr);

// console.log(reversedTuple);