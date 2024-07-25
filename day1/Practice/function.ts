type funType = () => string
 
  function f( ): funType{
   function f1( ){ return "sagar"  }
 
return f1;
 
  }



  type funType2 = (n:number,m:number)=>number;


const calculate :funType2 = (n,m)=>{
    return n + m;
} 



type funType3 = (n:number,m:number)=>number;


const calculate2 :funType3 = (n,m)=>{
    return n + m;
} 
