import PromptSync from "prompt-sync";
const prompt = PromptSync();

let firstValue = prompt("Enter first Value: ");
let secondValue = prompt("Enter Second Value: ");

console.log(firstValue);
console.log(secondValue);

let operater = "-";

function calculator(firstValue, secondValue, operater) {
    if(operater === "-"){
        console.log(firstValue - secondValue);
    }
    else{
        console.log(firstValue + secondValue);
    }
}

calculator(firstValue, secondValue, operater)