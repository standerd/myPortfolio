(function(){


let random = 0;
let escape = "0";
let score = 0;

function Question(
  question,
  possibleAnswers,
  correctAnswer
) {
  this.question = question;
  this.possibleAnswer = possibleAnswers;
  this.correctAnswer = correctAnswer;
};

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (i = 0; i < this.possibleAnswer.length; i++){
        console.log(i + ": " + this.possibleAnswer[i] )
    }
}

Question.prototype.checkAnswer = function(promptAnswer){
    
    if (promptAnswer === this.correctAnswer) {
        score++;
        console.log("Correct your score is now " + score);
      } else if (promptAnswer === "quit") {
        escape = "quit";
      } else {
        console.log("Incorrect answer please try again");
      }


}

let question1 = new Question(
  "Is JavaScript a difficult language to learn?",
  ["No", "Yes", "Maybe"],
  "0"
);

let question2 = new Question(
  "Are functions objects?",
  ["No", "Yes", "Maybe"],
  "1"
);

let question3 = new Question(
  "What works hand in hand with Javascript on the front end?",
  ["Java", "C#", "HTML and CSS"],
  "2"
);

let question4 = new Question(
  "How many primitive datatype are there in Javascript?",
  ["5", "10" , "2"],
  "0"
);

let possibleQuestions = [question1, question2, question3, question4];

while (escape !== "quit") {
    random = Math.round(Math.random() * 3);
    possibleQuestions[random].displayQuestion();
    let userAnswer = prompt("Please select the correct answer from the below?");
    possibleQuestions[random].checkAnswer(userAnswer);  
}


})();
