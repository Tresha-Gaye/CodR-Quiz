/* PSEUDO CODE
GOAL: TO TAKE A CODE QUIZ
WHEN I CLICK THE START BUTTON
* A TIME STARTS (SETiNTERVAL/COUNT 1000MS)
* I AM PRESENTED WITH A QUESTION
WHEN I ANSWER A QUESTION
* I AM PRESENTED WITH ANOTEHR QUESTION
WHEN I ANSWER A QUESTION 
* IF THE ANSWER IS CORRECT THE TIME COUNTS DOWN NORMALLY (~ 1 SEC)
* IF THE ANSWER IS INCORRECT THEN MORE TIME IS SUBTRACTED FROM TEH CLOCK (> 1 SEC)
WHEN ALL QUESTIONS ARE ANSWERED OR TIME REACHES 0
* THEN THE GAME IS OVER
WHEN THE GAME IS OVER
* THEN I CAN SAVE MY INITIALS AND SCORE (LOCAL STORAGE- SET ITEM, GET ITEM)*/


var index = 0;

// 'click to start' begins quiz, starts timer
var startEl = document.getElementById("start-btn");

var startQuiz = function () {
  

  // countdown timer function
  var timeLeft = 60;
  var countdownTimer = setInterval(function() {
  console.log("starting");
    timeLeft--;
    document.querySelector("#quiz-max-time").textContent = timeLeft + " seconds";
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        window.alert("Time is up! Be sure to save your score.");
        return countdownTimer // restarts timer after it reaches zero, by pressing 'start' again
      }
    }, 1000);
  
    // this transition from welcome screen to each question
    var welcomeField = document.getElementById("welcome").style.display = "none";
    var btnField = document.getElementById("start-btn").style.display = "none";
    var nextField = document.getElementById("answer-btn").style.display = "block";

    // iterates through questions until last question then stops
    if (index < questionList.length) {
        var possibleChoices = questionList[index].question;
        
        var fieldName = document.getElementById("question-box");
        fieldName.innerHTML = possibleChoices;
        index++;
    }
    else {
        var fieldName = document.getElementById("question-box");
        fieldName.innerHTML = "Time is Up";
    }

}; 
startEl.addEventListener("click", startQuiz);
  
// set questions in an array
var questionList = [
  { question: "HTML is the coding language that is used to create web pages that a web brower can display",
    answer: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a-True"
  },
  { question: "CSS, also known as 'Cascading Style Sheets', can only control the layout of one web page at a time",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b-CSS can control the layout of multiple web pages all at once"
  },
  { question: "JavaScript can hide HTML elemtents.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "a-Hiding elements can be done by changing the 'display' style"
  },
  { question: "When JQuery hides an element, the content becomes transparent and leaves an empty space on the page.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "b-The content still exists, but has zero width and height"
  },
  { question: "It is no longer possible to create custom CSS stylesheets if Bootstrap stylesheets are being use.",
    answers: {
    a: "True",
    b: "False"
    },
    correctAnswer: "b-custom code in an external style sheet can be used to customize Bootstrap"
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