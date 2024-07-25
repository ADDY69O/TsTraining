type personInfo ={
    name:string,
    age:number,
    address:string
}

type socialInfo = number;

type websiteInfo = string;


type userInfo = personInfo | socialInfo | websiteInfo ;

type Person  ={
    personalInfo :userInfo,
    friends :userInfo,
    website : userInfo

}


let Addy :Person = {
    personalInfo :{
        name:"Aditya",
        age:21,
        address:"newDelhi"
    },
    friends:21,
    website:"www.mywebsite.com"
}


let Addy2  = {
    personalInfo :{
        name:"Aditya2",
        age:20,
        address:"UP"
    },
    friends:21,
    website:"www.mywebsite.com"
}satisfies userInfo;


Addy2.website.toUpperCase()