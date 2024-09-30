const nums = [10,15,17,27,30,70];
const  numToStr =nums.map(num => num.toString());

console.log(numToStr);
const haveSeven = numToStr.find(s => s.includes("7"));
console.log(haveSeven);
