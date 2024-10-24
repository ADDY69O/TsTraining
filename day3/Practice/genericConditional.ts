
// problem Statement :

 //  taken two arguments ( arg1, arg2) 
 // argument 2 both  have restricted values {true,false,yes,no}
 // argument 1 is boolean   
 // testcases
// If first argument is true then second argument is {yes or no}
// If first argument is false then second argument is {true or false}


type BooleanType = true | false;

type stringType = "yes" | "no" ;

const funPlay  = <Targ1 extends boolean> (arg1 : Targ1 , arg2 : Targ1 extends true ? stringType :BooleanType  ) =>{

}


funPlay(true,"yes")
funPlay(true,"no")
// funPlay(true,true) showing error 

// funPlay(false,"yes") showing error
funPlay(false,true);
funPlay(false,false);
