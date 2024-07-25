
const data1 : Array<number> = [];

const data2 : number[] = [1,2,3,5]
const data3 : string[] = ["abc", "def"]

const data4 : (number | string)[] = [1,"abc",2,"def"]

// it assign the value of either type number or array of strings
const data5 : number | string[] = 1;



// it assign the value of either array of  number or array of strings
const data6 : number[] | string[] = [1,2,3,4,5];
