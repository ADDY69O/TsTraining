

type colorHex =  `${"#"}${string}` 
type Hex =  "#" | string 


type colorOption ={
    red : colorHex,
    yellow : colorHex,
    green : colorHex,
}


type colorValue  = "red" | "yellow" | "green"



const colorOptions  ={
    red:"#FF0000",
    yellow:"#FFFF00",
    green:"#00FF00",
    brown:"#000000",    
} satisfies  Record<string,colorHex>;

const colorOptions1  :  colorOption ={
    red:"#FF0000",
    yellow:"#FFFF00",
    green:"#00FF00",
 
} 
const colorOptions2={
    red:"#FF0000",
    yellow:"#FFFF00",
    green:"#00FF00",
 
}satisfies colorOption  




// valdiate the colors



