const multipliedTable = []; 
const numValue = 5;

for (let i = 0; i < numValue; i++) {
    const temporary = [];
    for (let j = 0; j < numValue; j++) {
      temporary.push(i*j);
     
    }
    multipliedTable.push(temporary);
    console.log(temporary);
}

console.table(multipliedTable);