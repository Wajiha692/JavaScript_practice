function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Do Flexible Stuff");
}

const function1 = () => console.log("hello from function1");

doFlexibleStuff(function1);