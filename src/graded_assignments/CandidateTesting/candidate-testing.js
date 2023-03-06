const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5/3)/2*10=? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride','true','40','Trajectory','3'];
let candidateAnswers = [1,2,3,4,5];
let line = "----------";

function askForName() {
    // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Enter your name: ");
    console.log(line);
}

function askQuestion() {
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question);
    for (i = 0; i < candidateAnswers.length; i++) {
        candidateAnswers[i] = input.question(`${i+1}) ${questions[i]}`);
        console.log((candidateAnswers[i].toString().toLowerCase()) === (correctAnswers[i].toString().toLowerCase())?`Correct!`:`Incorrect. The correct answer is: ${correctAnswers[i]}`);
        console.log(line);
    }
}
// console.log(candidateAnswers);
function gradeQuiz(candidateAnswers) {

    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

    // let grade = (correctAnswer.toLowerCase() === candidateAnswer.toLowerCase());
    // if(!grade) {
    //  console.log("Incorrect");
    //  } else {
    //    console.log("Correct");
    //  }
    //  return grade;

    let grade = 0;

    for (let i = 0; i < 5; i++) {
        ((candidateAnswers[i].toString().toLowerCase()) === (correctAnswers[i].toString().toLowerCase())?grade++: grade += 0);
        // console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`);
    }
    grade = (grade/candidateAnswers.length)*100;
    console.log((grade>=80)?`Congratulations! You passed the assessment with a grade of ${grade}%!`:`We regret to inform you that your grade of ${grade}% does not meet the 80% passing threshold.`);
    return grade;
}

function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name //
    console.log(`Welcome to the aptitude test, ${candidateName}.`);
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};