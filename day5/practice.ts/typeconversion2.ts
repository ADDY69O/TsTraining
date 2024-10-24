// // Define the function returning the data
// function getVariant3(componentOption: any, variant: string) {
//     return {
//       ButtonV1: 'ButtonV1',
//       ButtonV2: 'ButtonV2',
//       ButtonV3: 'ButtonV3'
//     } as const;
//   }
  
//   // Call the function
//   const data2 = getVariant3({}, 'variant');
  
//   // Define the type based on the `data`
//   type DataType = typeof data2;
  
//   // Extract the union type of the keys
//   type KeyUnion = keyof DataType; // "ButtonV1" | "ButtonV2" | "ButtonV3"
  
//   // Extract the union type of the values
//   type ValueUnion = DataType[keyof DataType]; // "ButtonV1" | "ButtonV2" | "ButtonV3"
  
//   // Example usage
//   const keyExample: KeyUnion = 'ButtonV1'; // valid
//   const valueExample: ValueUnion = 'ButtonV2'; // valid
  
// //   // Invalid examples
// //   const invalidKeyExample: KeyUnion = 'InvalidKey'; // error
// //   const invalidValueExample: ValueUnion = 'InvalidValue'; // error
  


const componentOption3 = {
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
  };
  
  type VariantData = {
    title: string;
    image: string;
    variant: string;
  };
  
  const getVariant3 = <T extends VariantData[]>(inputData: T, variant: keyof VariantData): { [key: string]: string } => {
    const variants: { [key: string]: string } = {};
  
    for (const item of inputData) {
      const result = item[variant];
      if (typeof result === "string") {
        variants[result] = result;
      }
    }
  
    return variants;
  };
  
  const data3 = getVariant3(componentOption3.button, "variant");
  
  // Type inference for literal types
  const literalData = typeof data3 ;
  
  // Derive types
  type OutputDataType = typeof literalData;
  type DataKeys = keyof OutputDataType; // "ButtonV1" | "ButtonV2" | "ButtonV3"
  type UnionType = OutputDataType[DataKeys]; // "ButtonV1" | "ButtonV2" | "ButtonV3"
  
  // Example usage
  let variant13: UnionType = "ButtonV1"; // valid
  let variant2: UnionType = "ButtonV2"; // valid
  let invalidVariant: UnionType = "Invalid"; // error
  