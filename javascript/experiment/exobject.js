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
        console.log(params);
        
    }

}
console.log(subject.exam.Date);
subject.accelerate("Speed is over");
console.log(subject["teacher name"]);
subject["chapter"][2] = "Energy";
console.log(subject.chapter);
