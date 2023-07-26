import PromptSync from "prompt-sync";
const prompt = PromptSync();
const userInputNumber = prompt("Please Enter the Number: ");
console.log(userInputNumber);
//const number = 7;
 for (let i = 1; i < 11; i++) {
    console.log( userInputNumber + " x " + i + " = " + userInputNumber * i );
    
 }