const fruits = ["apple","orange","Mango","banana","Dragon"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);
const turist = ["coxbazar","Kuakata","bandorbon"];
turist.push("ranggamati");
console.log(turist);
turist.push("centmartin","shundorbon","sajek");
console.log(turist);
turist.pop();
console.log(turist);
const bookList = ["math book" , "javascript book" , "bangla book"];
if (bookList.includes("javascript book")) {
    console.log("I have a javascript book");
    
}else{
    console.log("I dont have javascript book");
}
let age = 25;
let weight = "55Kg";
const footballPlayer = ["messi","neymer","ronaldo"];
// console.log(Array.isArray(age));
if(Array.isArray(age)){
    console.log("This is not Array");

}else if(Array.isArray(footballPlayer)){
    console.log("this is a Array");

}else{
    console.log( "There isn't a single array here" );
}
const addArray = fruits.concat(footballPlayer);
console.log(addArray);
