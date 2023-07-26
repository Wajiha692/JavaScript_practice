const promise = new Promise(function(resolve, reject){
    resolve('JavaScript');
})
promise.then(function (success) {
    console.log("Success: ", success);
    
}).catch(function (error) {
    console.log("Error: ", error);
    
})