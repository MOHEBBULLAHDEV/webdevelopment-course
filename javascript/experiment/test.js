let question1 =" question1 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
let question2 =" question2 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
let question3 =" question3 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
let question4 =" question4 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
let question5 =" question5 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
let question6 =" question6 Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level, answering questions such as";
const questions = ["question1","question2","question3","question4","question5","question6",];



// Access the values of the variables dynamically
const valuesArray = questions.map(varName => eval(varName));

console.log(valuesArray); // Output: ['Apple', 'Banana', 'Cherry']
