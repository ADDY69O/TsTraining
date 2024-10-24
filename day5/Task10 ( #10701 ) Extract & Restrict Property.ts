const componentOption = {
    button: [
      {
        title: "Button Primary",
        image: "/assets/buttonV1.png",
        variant: "ButtonV1",
      },
      {
        title: "Button Secondary",
        image: "/assets/buttonV2.png",
        variant: "ButtonV2",
      },
      {
        title: "Button Tertiary",
        image: "/assets/buttonV3.png",
        variant: "ButtonV3",
      },
    ],
    header: [
      {
        title: "Header Primary",
        image: "/assets/headerV1.png",
        variant: "HeaderV1",
      },
      {
        title: "Header Secondary",
        image: "/assets/headerV2.png",
        variant: "HeaderV2",
      },
    ],
  }as const

  

  // type ArrayType <T> = T extends Array<infer P > ?  P extends {variant:any} ?P["variant"]  :never :never
  type ArrayType <T >= T extends {variant : infer V} ? V : never; 


  type Variant = ArrayType<typeof componentOption.button[number]>

  // type variantType= `${string}V${number}`;
 
  // const version : variantType= "HeaderV1";
  
  // type newObj = {
  //   [key:string]:string
  // }
   


//   const getVariant  = <T> (inputData:T,variant:string ):newObj =>{
//     const variants : newObj={};
    
//     for(let key in inputData){
        
//         for(let variantKey  in inputData[key] ){
//             if( variantKey === variant ){
//                 let result = inputData[key][variantKey] ;
//                 if(typeof result === "string"){
//                        variants[result] = result;
//                     }
//             }
//         }

//     }

//     return variants   ;
    


//   }

 
// let data =  getVariant(componentOption.header,"variant")
// console.log(data);
// type newData =  keyof typeof  data ;

// type newDataObject = {
//     [p in keyof typeof data] :   typeof data[p] }

// // let HeaderVariant : newDataObject = "HeaderV1"



// // const newType =   typeof data ;
// // type newUnionType =   keyof typeof data 

// // type newType =  keyof keyo   f dataType




// // let variant : newUnionType = "toString"



// type outputDataType = typeof data;

// type dataKeys = keyof outputDataType;

// type unionType =  outputDataType[keyof outputDataType];



// let variant1:unionType = "newType"