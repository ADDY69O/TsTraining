// Create a utils type *NullabelProperties* that takes object and make every property to be also null

// Challenge one -> Single level object type
// Challenge two -> Nested object type

// <pre><code class="javascript">
// interface User {
//     age: number;
//     name: string;
// }

// type NullableExample = NullabelProperties<Example>;
// </code></pre>

// Should infer NullableExample as { age: number|null ; name: string|null; }




interface User {
    age: number;
    name: string;
}

type NullableExample<User>={
    [key in keyof User] : User[key] extends object ? NullableExample<User[key]> :  User[key] | null;
}




type NullableType = NullableExample<User>



const data :NullableType ={
    age:null,
    name:null
}