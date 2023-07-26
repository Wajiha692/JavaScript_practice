function recursiveFunction(number) {
    console.log("Starting function", number);
    if(number > 0 && number < 11){
        recursiveFunction(--number)
    }
    else{
        console.log("Recursion completed");
    }
    console.log("Function ended: ", number);
}

recursiveFunction(5);