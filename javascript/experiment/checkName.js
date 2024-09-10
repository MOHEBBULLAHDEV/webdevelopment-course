function checkName(name) {
  let lastChar = name[name.length - 1];
  let characters = ["h", "b", "m", "s"];
  let result = false;
  for (const char of characters) {
    // console.log(char);
    if (lastChar === char) {
      result = true;
    }
  }
  return result == true ? "good name" : "bad name";
}

console.log(checkName("mohebbullah"));
