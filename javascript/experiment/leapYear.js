// If a year is divisible by 4, then it is a leap year
function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
        
    } else if (year % 100 === 0 && year % 400 === 0){
        return true
    }else{
        return false
    }
    
}
console.log(checkLeapYear(2100));