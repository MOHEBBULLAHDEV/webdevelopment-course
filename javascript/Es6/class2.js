class product{
    name = "bangladesh";
    constructor(english){
        this.language = english;
    }



    speak(english){
        console.log(english);
        

    }
}

const kokil = new product('how are you');
console.log(kokil);
class Teacher{
    school = "NS KAMIL MADRASHA";
    constructor(name,subject,level){
        this.name = name;
        this.subject = subject;
        this.level = level
    }
}

const arabicTeacher = new Teacher('Jakir','Arabic','six');
console.log(arabicTeacher);
const mathTeacher = new Teacher('Mohebbullah','Math','Ten');
console.log(mathTeacher);

