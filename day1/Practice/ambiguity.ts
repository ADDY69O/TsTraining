// type cardNumber ={
//     cardNumber : number,
//     holderName:number
// }

// type cardHolderName ={
//     holderName : string
// }

// type cardDetails = cardNumber & cardHolderName & {
//     cardCvv : number
// }

// const card : cardDetails={
//     cardCvv:123,
//     cardNumber:12345,
//     // holderName:"Aditya" It assign to never 

    
// }

// console.log(card)



function getDbData (id : string | number){

    if( typeof id === "string"){
        id.toUpperCase();
    }
    else{
        console.log(id);
    }


}

 