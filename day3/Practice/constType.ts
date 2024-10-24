
const shades ={
    Red :"red" as const ,
    Yellow :"yellow" as const
}

type colorShade = typeof shades


function colorFun(colorArg:  colorShade[keyof colorShade]) {
console.log(colorArg)
return colorArg;
}

colorFun(shades.Red)