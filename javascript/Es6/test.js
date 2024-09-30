const student = {
    sName: "mohebbullah",
    roll: 120,
    result:"A+"

};
const {sName,...personalInfo} = student;
console.log(personalInfo);