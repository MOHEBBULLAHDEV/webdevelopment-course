const maxNum = Math.max(2,5,25,10,15,35,20,24,30);
// console.log(maxNum);
const arrayNum = [2,5,25,10,50,15,35,20,24,30];
// console.log(arrayNum);
arrayMaxNum = Math.max(...arrayNum)
// console.log(arrayMaxNum);



const friends = [2,4,6,8,10];
const bondhu = friends;
// console.log(bondhu);

// console.log(friends);
const dosto = [...friends,5000];
bondhu.push(12,14,16,20);

const vondo = [...bondhu]
friends.push(100)

// console.log(dosto);
// console.log(friends);
console.log(vondo);