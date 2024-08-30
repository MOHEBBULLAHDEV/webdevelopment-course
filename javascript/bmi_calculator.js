/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 25;
let obese;
let overweight;
let normal;
let underweight;
if (weight <18.5) {
    underweight = "you Are underweight";
    console.log(underweight);
    
} else if(weight >= 18.5 && weight <= 24.9){
    normal = "you Are normal";
    console.log(normal);
    
}else if(weight >= 25 && weight <= 29.9){
    overweight = "you Are overweight";
    console.log(overweight);

}else{
    obese = "you Are obese";
    console.log(obese);

}