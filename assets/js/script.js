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
var startEl = document.querySelector("#start-btn");

var startQuiz = function () {
  countdownTimer();


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
  
    // return "Press start to play again"

//
startEl.addEventListener("click", countdownTimer());
  

  // to hide/show each questions set up the data attributes for the questions
     
startEl.addEventListener("click", function() {
  document.querySelector("#start-btn").hidden = true;
  document.querySelector("#question-1").hidden = false;
}, false);


// set questions

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

// var questions = questionList[i]
// var questionsLength = questions.length

for (var i = 0; i < questionsLength; i++) {
  console.log(i);
}
// var randomquestion = (Math.floor(Math.random() * questionList.length));
//     console.log(randomquestionsIndex);

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
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);



// // Add styling to list element
// listEl.setAttribute("style", "background:#333333; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");



  
// });

// // to set up localStorage

// var firstNameInput = document.querySelector("#first-name");
// var lastNameInput = document.querySelector("#last-name");

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
};