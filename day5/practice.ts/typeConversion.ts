
type InputData<T> = {
    [key: string]: {
      [variantKey: string]: T;
    };
  };


  // Adjust function signature to be more type-safe
  const getVariant2 = <T extends string>(inputData: InputData<T>, variant: string): Record<T, T> => {
    const variants: Record<T, T> = {} as Record<T, T>;
  
    for (const key in inputData) {
      const subObject = inputData[key];
      
      if (typeof subObject === 'object') {
        for (const variantKey in subObject) {
          if (variantKey === variant) {
            const result = subObject[variantKey];
            if (typeof result === 'string') {
              variants[result as T] = result;
            }
          }
        }
      }
    }
  
    return variants;

  };


// Example input data
const inputData = {
    group1: {
      btn: "btn",
      btn2: "btn2"
    },
    group2: {
      btn3: "btn3",
      btn4: "btn4"
    }
  };
  
  // Call the function
  const variants = getVariant(inputData, "btn");
  
  // Extract the return type
  type ReturnTypeOfGetVariant = ReturnType<typeof getVariant>;
  
  // Extract the union type of the values
  type ValuesUnion = ReturnTypeOfGetVariant[keyof ReturnTypeOfGetVariant];
  
  // Example usage
  const example1: ValuesUnion = "btn";  // valid
  const example2: ValuesUnion = "btn2";  // valid
  const example3: ValuesUnion = "btn3";  // valid
  const invalidExample: ValuesUnion = "invalid";  // error: "invalid" is not assignable to type 'ValuesUnion'
  