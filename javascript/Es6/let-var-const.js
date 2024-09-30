var x = 25;
console.log(x);
var x = 50;
console.log(x);
let X = 75;
console.log(X);
// Cannot redeclare block-scoped variable 'X' but you can reasign value;

// let X = 25;  
 X = 35;
 console.log(X);

const age = 24;
//  using const keywor you cannot redeclare and reasing 
// const age = 25; 
const numbers = [2,25,12,32,58,60];
// cannot redeclare and reasing
// const numbers = [25,32,60,52];
// but you can modify ,delete and add array value;
numbers[2] = 800;
console.log(numbers);
numbers.push(25,3000,500,5555);
console.log(numbers);
// same as for object
const sutdent = {
    name: "rahmatullah",
    roll: 25
};
console.log(sutdent);
sutdent.name = "Sadia Mim";
console.log(sutdent);


 let sum = 0;
for (let i = 0; i <= 10; i++) {
    const num = i;
    sum = sum + num;

   
    
}
console.log(sum);



