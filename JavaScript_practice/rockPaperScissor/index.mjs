import randomInteger from "random-int";

import PromptSync from "prompt-sync";


//the available choices
const choices = ["rock", "paper", "scissor"];
const userPrompt = "Please enter: 0 for rock, 1 for paper, or 2 for scissor. ";
let outcome = "Ready to play! ";

//computer choose randomly
const computerChoice = randomInteger(0,2);

const computerChoiceName = choices[computerChoice];


//taking input from user
const prompt = PromptSync();
const userInput = prompt(userPrompt);
const userChoice = choices[userInput];

if(computerChoiceName === userChoice){
    outcome = "draw";
}else if(computerChoiceName === "rock" && userChoice === "paper"){
    outcome = "Player Wins";
}else if(computerChoiceName === "rock" && userChoice === "scissor"){
    outcome = "Computer Wins";
}else if(computerChoiceName === "paper" && userChoice === "rock"){
    outcome = "Computer Wins";
}else if(computerChoiceName === "paper" && userChoice === "scissor"){
    outcome = "Player Wins";
}else if(computerChoiceName === "scissor" && userChoice === "paper"){
    outcome = "Computer Wins";
}else if(computerChoiceName === "scissor" && userChoice === "rock"){
    outcome = "Player Wins";
}else{
    outcome = "Invalid entry. Please try again";
}

console.log("Computer chooses: " +computerChoiceName);
console.log("Player chooses: " + userChoice);
console.log(outcome);

