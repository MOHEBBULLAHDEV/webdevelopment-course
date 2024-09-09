const subject = {
    name: "physics",
    'teacher name': "fayzul karim",
    classTime: "10 Am",
    chapter: ["vector","force","electricity"],
    exam: {
        name: "Final Exam",
        mark:100,
        PassedMark: 60,
        Date: "25/12/2024",
        question:50,
        perQuestionMark: 2,
    },
    accelerate: function(params) {
        // console.log(params);
        
    }

}
for(const keys in subject){
    console.log(subject[keys]);
}
const argentina = new Object()
const rubber = Object.create({});
argentina.name = "tamim";
console.log(argentina.name);
console.log(rubber);