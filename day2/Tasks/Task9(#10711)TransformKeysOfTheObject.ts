// Function that will take first parameter a object and second one a object with new properties name to be updated. When it typing the second argument it should give suggestion.

// <pre><code class="javascript">
// const user = {
//     firstName: "Tony";
//     lastName: "Stark";
//     age: 54;
// }

// const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
// </code></pre>


// Should give return type as
// <pre><code class="javascript">
// {
//     first: string;
//     last: string;
//     age: number;
// }
// </code></pre>

type userSignatureType = {
    [key:string]:any
}

type userTypes = {
    firstName: string,
    lastName:string,
    age:number
}

const user:userSignatureType = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54,
}


// type newuserType <userType,user>={
//     user[key in keyof userTypes]: userTypes[key]
// }

type inputType ={
    firstName: string,
    lastName: string,
}

 
type userSignature ={
    [index:string]:string
}
 

function transformUser(user:userSignatureType,input:userSignatureType):userSignature {
    
    for(let key in input){
        user[input[key]] = user[key]; 
        delete user[key];
    }
     return user;
}


console.log(transformUser(user,{firstName:"name",lastName:"last"}));


