function oddAverage(numbers) {
  // console.log(numbers);
  const odds = [];
  let sum = 0;
  let average;
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 !== 0) {
      // console.log(number);
      odds.push(number);
    }
  }
  // console.log(odds);
  for (const odd of odds) {
    sum = sum + odd;
  }
  average = sum / odds.length;

  // console.log(average);
  return average;
}

const numbers = [10, 12, 13, 15, 20, 25, 35, 50, 65, 115, 39];

console.log(oddAverage(numbers));
