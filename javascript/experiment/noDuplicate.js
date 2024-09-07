// const number = [6,2,3,5,3,8,2,8,5,6];
// const uniqueArray = [...new Set(number)];
// console.log(uniqueArray);
const students = ["jahir","mahir","nadir","jahir","jabir","tanbir","nadir"];
function checkDuplicate(array) {
    const uniqueStudentList = [];
    for (const name of array) {
        // console.log(name);
        
        if (uniqueStudentList.includes(name) === false) {
            uniqueStudentList.push(name)
            
        }

        
    }
    return uniqueStudentList
    
}
const uniqueArray = checkDuplicate(students);
console.log(uniqueArray);
