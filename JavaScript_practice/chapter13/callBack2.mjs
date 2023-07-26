//this is an call back fucntion
function pakistan(grade) {
    switch (true) {
        case grade === "A+":
            console.log("You got an ", grade, ": Perfect!");
            break;
        case grade === "A":
            console.log("You got a ", grade, ": Excellent!");
            break;
        case grade === "B":
            console.log("You got a ", grade, ": Good!");
            break;
        case grade === "C":
            console.log("You got a ", grade, ": Ok!");
            break;   
        case grade === "D":
            console.log("You got a ", grade, ": Improve your work!");
            break; 
        default:
            console.log("You got a ", grade, ": Try again");
            break;
    }
    
}
//this is main function 
function getGrade(percentage, callback) {
    let grade;
    switch (true) {
        case percentage >=90:
            grade = "A+";
            break;  
        case percentage >=80:
            grade = "A";
            break;
        case percentage>=70:
            grade = "B";
            break;
        case percentage>=60:
            grade = "C";
            break;
        case percentage>=50:
            grade = "D";
            break;
    
        default:
            grade = "F";
            break;
    }
    callback(grade);
}
getGrade(85, pakistan);