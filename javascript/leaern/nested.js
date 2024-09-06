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
const keys = Object.keys(college)
for(key of keys){
    console.log(key);
    console.log(key , college[key]);

}
 delete college.class;
//  let x = "BKALJKLSDLKSDLKSDLKSDF";
//  x[2] = "C";
//  console.log(x);
//  let str = "Mississippi";
// console.log(str.indexOf("i", 2));



const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}