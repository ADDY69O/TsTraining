type userType  = {
    name:string,
    age:number
}


const getUserData = (userObj :userType ,key:keyof userType) =>{

 return userObj[key];
}
const getUserDataByGeneric  =<TObj>  (obj :TObj ,key:keyof TObj) =>{

 return obj[key] as string;
}


const user:userType  ={
    name:"Aditya",
    age:30
}



getUserData(user,"name");
// getUserData(user,"address"); // showing error



const colors={
    red:"#FF0000",
    yellow:"#FFFF00",
    green:"#00FF00",
 
}

const value = getUserDataByGeneric(colors,"yellow");
// const value = getUserDataByGeneric(colors,"brown");  shows error 