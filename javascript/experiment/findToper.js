const mark = [20, 25, 10, 50, 35, 120, 30, 45];
function checkToper(toper) {
  let check = 0;
  for (top of toper) {
    // console.log(top);
    if (check < top) {
      check = top;
    } else {
      continue;
    }
  }
  return check;
}
console.log(checkToper(mark));

