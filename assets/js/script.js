/* PSEUDO CODE
GOAL: TO TAKE A CODE QUIZ
WHEN I CLICK THE START BUTTON
* A TIME STARTS (SETiNTERVAL/COUNT 1000MS)
* I AM PRESENTED WITH A QUESTION
WHEN I ANSWER A QUESTION
* I AM PRESENTED WITH ANOTHER QUESTION
* IF THE ANSWER IS CORRECT THE TIME COUNTS DOWN NORMALLY (~ 1 SEC)
* IF THE ANSWER IS INCORRECT THEN MORE TIME IS SUBTRACTED FROM THE CLOCK (> 1 SEC)
WHEN ALL QUESTIONS ARE ANSWERED OR TIME REACHES 0
* THEN THE GAME IS OVER
WHEN THE GAME IS OVER
* THEN I CAN SAVE MY INITIALS AND SCORE (LOCAL STORAGE- SET ITEM, GET ITEM)*/


var index = 0;
var timeLeft = 60;
var gameOver = 0;


// 'click to start' begins quiz, starts timer
var startEl = document.getElementById("start-btn");

var nextQuestion = function() {
  document.getElementById("show-answer").innerHTML = "";
  index++;
  displayQuestions();
  var numQuestions = questionList.length;
  if(index != numQuestions) {
    document.getElementById("next-q-btn").style.display = "none";
    document.getElementById("answertrue-btn").style.display = "inline";
    document.getElementById("answerfalse-btn").style.display = "inline";
  } else {
    document.getElementById("next-q-btn").style.display = "none";
    document.getElementById("answertrue-btn").style.display = "none";
    document.getElementById("answerfalse-btn").style.display = "none";
    document.getElementById("save-btn").style.display = "inline";
    document.getElementById("username").style.display = "block";
    // document.getElementById("user-label").style.display= "block";
  }
  // console.log("click");
}

var saveScore = function() {
  // var displayScore = localStorage.getItem("highScore");
  // var totalScore = 0;
  // console.log(displayScore);
  // if(displayScore != NaN) {
  // totalScore = Number(displayScore) + timeLeft;
  // console.log("if", totalScore);
  // } else {
  //   totalScore = timeLeft;
  //   console.log("else", totalScore);
  // }
  //   console.log("totalScore= ", totalScore);
  
    var userName = document.getElementById("username").value;
    localStorage.setItem(userName, JSON.stringify(timeLeft));
    displayScore = localStorage.getItem(userName);
    // for(var i = 0; i < displayScore.length; i++) {
    // gameOver = 1;
    // if (timeLeft > 0) {
    //   timeLeft = 1;
    //   // clearInterval(countdownTimer);  
    // }
    
    // console.log(displayScore);
    document.getElementById("knowledge-check-id").textContent = "High Score";
    document.getElementById("welcome-id").textContent = "";
    document.getElementById("question-box").textContent = userName + " score is " + displayScore;
    document.getElementById("save-btn").style.display = "none";
    document.getElementById("username").style.display = "none";
  }
    

var playAgain = function () {
  document.getElementById("replay-btn").style.display = "inline";
}


var displayAnswerTrue = function() {
  var answer = true;
  var ans = questionList[index].shortAnswer;
  var longAnswer = questionList[index].correctAnswer;
  if (answer === ans) {
    document.getElementById("show-answer").innerHTML = "<br/>Your answer is correct!<br/>" + longAnswer;
  } else {
    document.getElementById("show-answer").innerHTML = "<br/>Your answer is incorrect!<br/>" + longAnswer;
    timeLeft = timeLeft - 10;
  }
  // nextQuestion();
  document.getElementById("answertrue-btn").style.display = "none";
  document.getElementById("answerfalse-btn").style.display = "none";
  document.getElementById("next-q-btn").style.display = "block";
}

var displayAnswerFalse = function() {
  var answer = false;
  var ans = questionList[index].shortAnswer;
  var longAnswer = questionList[index].correctAnswer;
  if (answer === ans) {
    document.getElementById("show-answer").innerHTML = "<br/>Your answer is correct!<br/>" + longAnswer;
  } else {
    document.getElementById("show-answer").innerHTML = "<br/>Your answer is incorrect!<br/>" + longAnswer;
    timeLeft = timeLeft - 10;
  }
  // nextQuestion();
  document.getElementById("answertrue-btn").style.display = "none";
  document.getElementById("answerfalse-btn").style.display = "none";
  document.getElementById("next-q-btn").style.display = "block";
}

var displayQuestions = function () {
  if (index < questionList.length) {
  var possibleChoices = questionList[index].question;
  
  var fieldName = document.getElementById("question-box");
  fieldName.innerHTML = possibleChoices;
  console.log(fieldName);
  // index++;
}
else {
  var fieldName = document.getElementById("question-box");
  fieldName.innerHTML = "All done! Save your score!";
}
};

// click true/false, hide both, display answers with a next questions button, then user will click next questions button, next questiosn will pop pu with true or false questions will pop
var startQuiz = function () {
  gameOver = 0; 
  document.getElementById("show-answer").innerHTML = "";
  // countdown timer function
  timeLeft = 60;
  var countdownTimer = setInterval(function() {
  // console.log("starting");
    timeLeft--;
    document.querySelector("#quiz-max-time").textContent = timeLeft + " seconds";
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        if(gameOver == 0)
          window.alert("Time is up! Be sure to save your score.");
        return countdownTimer // restarts timer after it reaches zero, by pressing 'start' again
      }
    }, 1000);
  
    // this transition from welcome screen to each question
    var welcomeField = document.getElementById("welcome-id").style.display = "none";
    var btnField = document.getElementById("start-btn").style.display = "none";
    var nextField = document.getElementById("answer-btns").style.display = "block";
    var trueButton = document.getElementById("answertrue-btn");
    var falseButton = document.getElementById("answerfalse-btn");
    var nextQuestionButton = document.getElementById("next-q-btn");
    var saveButton = document.getElementById("save-btn");

    
    // trueButton.addEventListener("click", displayAnswerTrue); 
    // falseButton.addEventListener("click", displayAnswerFalse);
    trueButton.addEventListener("click", displayAnswerTrue); 
    falseButton.addEventListener("click", displayAnswerFalse);
    nextQuestionButton.addEventListener("click", nextQuestion);
    saveButton.addEventListener("click", saveScore);

    displayQuestions();
    console.log("click");

    // var nextField = document.getElementById("answertrue-btn").style.display = "block";

    // iterates through questions until last question then stops

}; 
startEl.addEventListener("click", startQuiz);

// var highScore = localStorage.getItem("highScore");
// var highScoreInt = Number(highScore);
// highScoreInt = highScoreInt + timeLeft;
// localStorage.setItem("highScore", JSON.stringify(highScoreInt)); 
// above is to cumulatively build the score

// next steps
// at end of quiz, create an end of quiz function, retreive high score from local storage0 
// consider not displying timer at end of quiz
//  append high score into a div/para/any container in html
// hide last questions & display an alert that say they're done with quiz

// next steps
// do a 'this' - before going to next question, do an if statement- cosole.log 'this' to see what it gives
// get the value of the element, true or fals
// compare the value

//if pick correct, then take time off clock, if incorrect then choose



// set questions in an array
var questionList = [
  { question: "HTML is the coding language that is used to create web pages that a web brower can display",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "HTML is the only coding language that can display on a web browser",
    shortAnswer: true
  },
  { question: "CSS, also known as 'Cascading Style Sheets', can only control the layout of one web page at a time",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "CSS can control the layout of multiple web pages all at once",
    shortAnswer: false
  },
  { question: "JavaScript can hide HTML elemtents.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "Hiding elements can be done by changing the 'display' style",
    shortAnswer: true
  },
  { question: "When JQuery hides an element, the content becomes transparent and leaves an empty space on the page.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "The content still exists, but has zero width and height",
    shortAnswer: false
  },
  { question: "It is no longer possible to create custom CSS stylesheets if Bootstrap stylesheets are being used.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "Custom code in an external style sheet can be used to customize Bootstrap",
    shortAnswer: false
  },
]


// is a for loop needed? think about it


// var questions = questionListArray
// var questionListArrayLength = questionListArray.length

// var questionContainer = document.querySelector(".question-container");
// // for (var i = 0; i < questionList.length; i++) {
//   for (var i = 0; i < 1; i++) {
//   questionContainer.textContent = questionList[i].question;
//   var possibleChoices = questionList[i].question;
//   // questionContainer.appendChild(possibleChoices);\
//   // questionContainer.innerHTML = possibleChoices;
//   // var fieldName = document.getElementById("question-box");
//   // fieldName.innerHTML = questionContainer.textContent;
// };
// //   console.log(i);
// }
// var randomquestion = (Math.floor(Math.random() * questionList.length));
//     console.log(randomquestionsIndex);



// store high score in localStorage

// example

// var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   // create user object from submission
//   var user = {
//     firstName: firstNameInput.value.trim(),
//     lastName: lastNameInput.value.trim(),
//     email: emailInput.value.trim(),
//     password: passwordInput.value.trim()
//   };

//   // set new submission to local storage 
//   localStorage.setItem("user", JSON.stringify(user));
  
// });

// var highScore = {
//   userInits: userInitInput.value.trim(),
//   userScore: userScoreInput.value.trim()
// };

//  // set new submission to local storage 
//  localStorage.setItem("highScore", JSON.stringify(highScore));

// //  get item 

// example

//  var loadTasks = function() {
//   var savedTasks = localStorage.getItem("tasks");
//   // if there are no tasks, set tasks to an empty array and return out of the function
//   if (!savedTasks) {
//     return false;
//   }
//   console.log("Saved tasks found!");
//   // else, load up saved tasks

//   // parse into array of objects
//   savedTasks = JSON.parse(savedTasks);

//   // loop through savedTasks array
//   for (var i = 0; i < savedTasks.length; i++) {
//     // pass each task object into the `createTaskEl()` function
//     createTaskEl(savedTasks[i]);
//   }
// };