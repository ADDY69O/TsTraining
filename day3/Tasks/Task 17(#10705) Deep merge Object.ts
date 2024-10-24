

function deepMerge <>(){



}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

type mergeObjectType = typeof  obj1;
const merged = deepMerge<> (obj1, obj2);
