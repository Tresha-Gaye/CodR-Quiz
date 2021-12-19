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

// function to start the quiz & set timer 
var startEl = document.querySelector(".start-btn");

var startQuiz = function () {
  countdownTimer();
}

var timeLeft = 60;
    var countdownTimer = setInterval(function() {
    timeLeft--;
    document.querySelector("#quiz-max-time").textContent = timeLeft + " seconds";
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        window.alert("Time is up! Be sure to save your score.");
        return countdownTimer()
      }
    }, 1000);

  startEl.addEventListener("click", countdownTimer())
  
  // set questions

var generateQuestions = function (questions, quizContainer, resultsContainer, submitButton) {

  var showQuestions = function (questions, quizContainer) {


  }

  var showResults = function (questions, quizContainer, resultsContainer) {


  }

  var showQuestions = function (questions, quizContainer) {

  }

  submitButton.addEventListener("click", function () {
    showResults(questions,quizContainer, resultsContainer);
  });
}
var questionList = [
  { question: "HTML is the coding language that is used to create web pages that a web brower can display",
    answer: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a-True"
  },
  { question: "CSS, also known as 'Cascading Style Sheets', can only control the layout of one web page at a time",
    answer: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b-CSS can control the layout of multiple web pages all at once"
  },
  { question: "JavaScript can hide HTML elemtents.",
    answer: {
    a: "True",
    b: "False"
    },
    correctAnswer: "a-Hiding elements can be done by changing the 'display' style"
  },
  { question: "When JQuery hides an element, the content becomes transparent and leaves an empty space on the page.",
    answer: {
    a: "True",
    b: "False"
    },
    correctAnswer: "b-The content still exists, but has zero width and height"
  },
  { question: "It is no longer possible to create custom CSS stylesheets if Bootstrap stylesheets are being use.",
    answer: {
    a: "True",
    b: "False"
    },
    correctAnswer: "b-custom code in an external style sheet can be used to customize Bootstrap"
  },
]
// var countdownClock = function() {
  // var timeLeft = 60;
  // var countdownTimer = setInterval(function() {
  //   timeLeft--;
  //     // document.querySelector("#quiz-timer").innerHTML = ("00:"+sec);
  //     // sec--;
  //     if (timeLeft <= 0) {
  //       clearInterval(countdownTimer);
  //       document.querySelector("#quiz-timer").innerHTML("Time's Up!");
  //     }
  //     document.querySelector("#quiz-timer") = 60 - timeLeft;
  //     timeLeft -= 1;
  //     }, 1000);
    


//countdownClock ();

// var buttonEl = document.querySelector(".btn");
// console.log(buttonEl);





// // to make the items on page disappear and reappear

// var count = 0;
// //  Select answer button elements
// var answerEl = document.querySelector(".answer-btn");
// var countEl = document.createElement("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }
// // Attach event listener to answer button element
// answerEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// // Attach event listener to decrement button element
// decrementEl.addEventListener("click", function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });



//   // to set the timer

//   var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

// function countdown() {
//   var timeLeft = 5;

//   // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function() {});
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function() {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }


// countdown();

// // to set up the quiz and buttons

// var body = document.body;
// var h1El = document.createElement("h1");
// var infoEl = document.createElement("div");
// var imgEl = document.createElement("img");
// var kittenEl = document.createElement("div");
// var nameEl = document.createElement("div");
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// h1El.textContent = "Welcome to my page";
// kittenEl.textContent = "This is my kitten 🐱.";
// nameEl.textContent = "His name is Jax.";
// favoriteEl.textContent = "My favorite foods are:";
// // Add text for list items
// li1.textContent = "Apples 🍎 ";
// li2.textContent = "Pizza 🍕 ";
// li3.textContent = "Dumplings 🥟 ";
// li4.textContent = "Cupcakes 🧁 ";

// body.appendChild(h1El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(kittenEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// imgEl.setAttribute("src", "http://placekitten.com/200/300");
// nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background:#333333; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");


// // to set up the data attribuites for the questions

// var container = document.querySelector(".container");

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
//       // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
//   }
  
// });

// // to set up localStorage

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

// buttonEl.addEventListener("click", function() {
//   alert("button clicked");
// })