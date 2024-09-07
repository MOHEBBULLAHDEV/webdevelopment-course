function feetToInch(inch) {
    convert = inch /12;
    return convert
    
    
}
 const  myHight = feetToInch(75);
 console.log(myHight);
 function feetToInch2(inch) {
   let feetValue = inch / 12;
    feetValue  = feetValue.toFixed(0);
    feetValue = feetValue + " Feet "
    inchValue = inch % 12;
    inchValue = inchValue + " inch"
    return feetValue + inchValue;

    
 }
 console.log(feetToInch2(75));