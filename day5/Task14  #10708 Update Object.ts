const obj = { a: 1, b: 'hello', c: true };

type ObjTest = keyof typeof obj

const updateObject = <T,K extends keyof T> (obj:T,key: K, values :  T[K] )=>{

}


const updated = updateObject(obj, 'b', 'world');