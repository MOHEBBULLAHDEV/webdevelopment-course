const student = {
    'student Name': "Mohebbullah",
    roll: 120,
    "class Captain": "Mahadi Hasan",
};
// console.log(student['student Name']);
// console.log(student.roll);
const {['student Name']: sName} = student;
console.log(sName);