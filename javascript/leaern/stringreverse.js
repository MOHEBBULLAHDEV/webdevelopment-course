

let reverse = '';
const sentence = "I am learning web dev.";
// for(const letter of sentence){
//     reverse =  letter + reverse;

// }
// console.log(reverse);
for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    reverse = sentence[i] + reverse;

    
}
console.log(reverse);
const reversed = sentence.split("").reverse().join("");

console.log(reversed);


