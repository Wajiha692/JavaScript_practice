import PromptSync from "prompt-sync";
const prompt = PromptSync();

const maxValue = 10;

const randomNumber = Math.floor(Math.random()*maxValue) + 1 ;
let status = false;

while(!status){
    let userInput = prompt("Guess the number between 1 to " + maxValue + ' ');
    userInput = Number(userInput);
    if(userInput === randomNumber){
        status = true;
        console.log("you won!, the number was " +randomNumber);
    }else if(userInput > randomNumber){
        console.log("Your guess is too high! ");
    }else{
        console.log("Your guess is too low");
    } 
   
}

