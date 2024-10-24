// type DataType = Record<string, number>export function getDifference<T extends DataType>(data1: T, data2: T): T {
//     const keys = Object.keys(data1)
//     return keys.reduce<T>((result, key) => {
//       result[key] = data1[key] - data2[key]
//       return result
//     }, {})
//   }


type DataType = Record<string, number>
function getDifference<T extends DataType>(data1: T, data2: T): T {
  const keys = Object.keys(data1)
  return keys.reduce<T>((result, key) => {
 
    const d = key as keyof T;
    result[d] = data1[key] - data2[key] as T[keyof T]
    return result
  }, {} as T)
}