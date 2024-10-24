
function generic <T>(value:T):T{
return value;
}

console.log(generic<string>("aditya"));
console.log(generic<number>(9211));
console.log(generic<boolean>(true));
console.log(generic<number[]>([1,2,3]));