
// example 1:
type User ={
    readonly _id :number,
    name:string,
    age:number
}

function updateData(u1:User):User{
    u1.age+=19;
    u1.name+=" kumar"
    // u1._id+=10; cant update beacuse it is readonly

    return u1;

}


console.log(updateData({_id:1,name:"Aditya",age:20}));



// example 2:

type cardNumber1 ={
    cardNumber : number
}

type cardHolderName1 ={
    holderName : string
}

type cardDetails1 = cardNumber1 & cardHolderName1 & {
    cardCvv : number
}

const card1 : cardDetails1={
    cardCvv:123,
    cardNumber:12345,
    holderName:"Aditya"
    
}

console.log(card1)