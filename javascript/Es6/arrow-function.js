const sum = function(a,b){
    return result = a + b;

}
console.log(sum(5,20));
function multi(a , b){
    return result = a * b;


}
console.log(multi(5,6));

const add = (a , b) => a + b;
console.log(add(36,25));
// have one pramiter
const obosisto = num => num % 2;
console.log(obosisto(25)); 
const myName = () => "Mohebbullah"
console.log(myName());

const student = {
    name: "Mohebbullah",
    roll: 220,
}
const studentNmae = (person) => person.name;

console.log(studentNmae(student));
// no paramiter
 const getPi = () => Math.PI;
 console.log(getPi());
//  another way to write big arrow function
 const multiple = (a,b,x,y) => {
   let c =  a  + b;
   let d =  x  + y;
   return c + d;

 }
 console.log(multiple(5,6,12,16));