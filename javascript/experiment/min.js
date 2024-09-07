const minimumNumber = [10, 5, 15, 65, 25, 2, 80, 45, 30];
function checkMinNumber(numberList) {
  let min = 500;
  for (number of numberList) {
    // console.log(number);
    if (number < min) {
      min = number;
    } else {
      continue;
    }
  }
  return min;
}
console.log(checkMinNumber(minimumNumber));
