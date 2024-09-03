const college ={
    name: "BMDC",
    class : [6,7,8,9,10],
    "class Ten":{
        student: 150,
        sex: "Female",
         
    }


}
console.log(college["class Ten"].student);
const twilve = college.class[2] = 12;
console.log(college.class);