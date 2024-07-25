type studentYear  = "firstYear"| "secondYear"|"thirdYear" |"lastYear"
type studentDetails ={
    rollNo:number,
    gender:"male"|"female"
}
 
// type studentDetails ="detail"

type studenInfo = studentYear  | studentDetails;

type Student ={
    year:studenInfo,
    personalInfo:studenInfo
}

const student :Student = {
    year:"secondYear",
    personalInfo:{
        rollNo:10,
        gender:"male"
    }
    // personalInfo:"detail"
}

console.log(student)




