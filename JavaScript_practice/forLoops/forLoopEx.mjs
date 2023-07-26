const myWork = [];
 for (let i= 1; i < 11; i++) {
    let status = i % 2 ? true : false;

    let temporaryWork = {
        name: `Lesson ${i}`,
        status: status
    }
    myWork.push(temporaryWork);
 }
 console.log(myWork);