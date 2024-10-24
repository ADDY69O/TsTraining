

const originalObject = { a: 1, b: 2, c: 3 };
const originalObject2 = [  1, 2,"aditya",true ];

type ArrayType2<T> = T extends Array<infer P> ? P :never; 

type InputType = ArrayType2<typeof originalObject2>

type CallbackType<T,K> = (value:T)=>K; 

const mapObject =  <T ,K>(InputData : T , CallbackFunction: CallbackType< T extends Object ? T[keyof T] : T extends Array<infer P> ? P : T  ,K>  ):T=>{

    if( typeof InputData === "object"){

        for( let Elements in InputData){
            
            if(typeof InputData[Elements] === "object"){
            
                InputData[Elements]  = mapObject(InputData[Elements] as T,CallbackFunction)  ;
            }
            else{

                InputData[Elements] = CallbackFunction(InputData[Elements] ) ;
            }

        }

    }
    

return InputData;
} 


const mappedObject = mapObject(originalObject, (value) => value * 2);


console.log(mappedObject)