

interface student {
    readonly _id:string,
    name:string,
    email:string,
    age:number,
    walk?():string,
    getIdCard : (cardId:string,collegeId:string)=>string,

}

const Aditya :student  ={
    _id:"123",
    name:"Aditya",
    email:"Adi@gmail.com",
    age:21,
    getIdCard :(cardId:string,collegeId:string)=>{
        return "Id card created"
    }


}



