function simpleCalculator(value1, value2, operation) {
    if (operation === "add") {
        let sum = value1 + value2;
        return sum;
        
    }else if(operation === "multiply"){
        let multiply = value1 * value2;
        return multiply;

    }else if(operation === "subtraction"){
        let subtraction = value1 - value2;
        return subtraction;


    }else if(operation === "division"){
        let division = value1 /value2;
        return division;
    }
    else{
        console.log("Calculate not possible");
    }
    
}
console.log(simpleCalculator(50,35,"division"));