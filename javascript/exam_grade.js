/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let getMark = 80;
if (getMark >=90) {
    console.log("you get A Grade Mark");
    
} else if(getMark >= 80 && getMark <= 89){
    console.log("you get B Grade Mark");
    
}else if(getMark >= 70 && getMark <= 79){
    console.log("you get C Grade Mark");
    
}
else if(getMark >= 60 && getMark <= 69){
    console.log("you get D Grade Mark");
    
}
else{
    console.log("you get Fall");

}