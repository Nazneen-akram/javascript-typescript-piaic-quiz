import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    {
        type: 'list',
        name: 'answer',
        message: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        choices: ["Microsoft", "Atari", "Commodore", "Apple"],
        correctAnswer: "Apple"
    },
    {
        type: 'list',
        name: 'answer',
        message: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        choices: ["Static", "Private", "Public", "Final"],
        correctAnswer: "Final"
    },
    {
        type: 'list',
        name: 'answer',
        message: "What is the most preferred image format used for logos in the Wikimedia database?",
        choices: [".png", ".jpeg", ".gif", ".svg"],
        correctAnswer: ".svg"
    },
    {
        type: 'list',
        name: 'answer',
        message: "On Twitter, what was the original character limit for a Tweet?",
        choices: ["120", "160", "100", "140"],
        correctAnswer: "140"
    },
    {
        type: 'list',
        name: 'answer',
        message: "This mobile OS held the largest market share in 2012.",
        choices: ["Android", "BlackBerry", "Symbian", "iOS"],
        correctAnswer: "iOS"
    }
];
let score = 0;
let index = 0;
async function askQuestion() {
    if (index === questions.length) {
        console.log(`Quiz finished! Your score is ${chalk.bold.green(score)}`);
        return;
    }
    const q = questions[index];
    const userAnswer = await inquirer.prompt(q);
    if (userAnswer.answer === q.correctAnswer) {
        console.log(chalk.green('Correct!'));
        score++;
    }
    else {
        console.log(chalk.red(`Incorrect! The correct answer was ${q.correctAnswer}`));
    }
    index++;
    askQuestion();
}
async function startQuiz() {
    const user = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is Your Name? "
    });
    console.log(chalk.blue(`Hello, ${user.fname}! Let's start the quiz.`));
    askQuestion();
}
startQuiz();
