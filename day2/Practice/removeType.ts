type name  = string | number;

type userType = {
    name:string | undefined,
    age:number | null
}

type newName = Exclude< userType, null|undefined>