let one = () => console.log("one");
let two = () => console.log("two");

let three = () => {
    console.log("three");
    one();
    two();
}

let four = () => {
    console.log("four");   //it will run first
    setTimeout(one , 0);   //it will run at last
    three();    // it will run after four

}
four();