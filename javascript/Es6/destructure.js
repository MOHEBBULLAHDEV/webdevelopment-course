const  student  = {
    StudentName:"Mohebbullah",
    roll: 220,
    className: "six"
}
const{className, roll:serial} = student;
console.log(serial);
const arrayNum = [50,5,20,10,15,25,45,35,40];
 const [x , y] = arrayNum
console.log(x,y);
function dubbleThem(a , b) {
   return [a*2,b*2]

    
}
const [c,d] = dubbleThem(5,6);
console.log(c,d);