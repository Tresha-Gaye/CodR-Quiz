/* PSEUDO CODE
GOAL: TO TAKE A CODE QUIZ
WHEN I CLICK
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
* THEN I CAN SAVE MY INITIALS AND SCORE (LOCAL STORAGE- SET ITEM, GET ITEM)

var buttonEl = document.querySelector(".btn");
console.log(buttonEl);


buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });