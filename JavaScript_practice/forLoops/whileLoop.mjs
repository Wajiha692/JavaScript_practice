import PromptSync from "prompt-sync";
const prompt = PromptSync();

let userInput = prompt("on a scale of 1-10, Rate how much do you like the name Alexander? ");
console.log(userInput);

if (userInput > 0 && userInput < 11){
    userInput = false;
}
else{
    userInput = true;
}
while (userInput) {
    userInput = prompt("on a scale of 1-10, Rate how much do you like the name Alexander? ");
    console.log(userInput);
    
}