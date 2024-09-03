let nikName = "Mohebbullah";
let lastName = "mohebbullah";
console.log(nikName == lastName);
let myFirst = "mohebbullah";
let myLast = "mohebbullah ";
console.log(myFirst == myLast);
let myPetFirst = "cat";
let myPetLast = "cat";
console.log(myPetFirst == myPetLast);
console.log(nikName.toLowerCase() == lastName.toLowerCase());
console.log(myFirst.trim() == myLast.trim());
let message = "Normally, JavaScript strings are primitive values, created from literals:";
console.log(message.split(" "));
console.log(message.split(","));
console.log(message.split("m"));
let x = message.split("")
console.log(x);

console.log(x.join(""));
// slice 
let letter = "Once upon a time, in a dense forest, there lived a wise old owl. The owl observed everything that happened in the forest, quietly and thoughtfully. Unlike the other animals who were quick to speak and often argue, the owl would listen carefully before saying anything.";
console.log(letter.slice(50, 200));
console.log(letter.length);
let love = "Love is composed of a single soul inhabiting two bodies.";
let quote = "Love is not about how many days, months, or years you've been together. It's all about how much you love each other every single day.";
let loveQuote = love.concat(quote);
console.log(loveQuote);

