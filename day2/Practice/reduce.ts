function getFirstElement <T> (...nums: T[]) : number{
    let data = nums.reduce((acc: number,curr:T)=>{
         if(typeof curr === "number"){
            return acc + curr;
         }
         else{
            return acc;
         }
    },0);
  
    return data;
 
}

console.log(getFirstElement<number|string>(1,"neha",3,4));