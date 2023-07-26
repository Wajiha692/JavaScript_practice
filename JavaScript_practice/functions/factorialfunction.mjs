function factorial(number) {
    console.log(number);
    if(number === 0){
        
        return 1
    }
    else{
       return number * factorial(--number);
    }
}
console.log("The Factorial of 7 "+ factorial(7));
