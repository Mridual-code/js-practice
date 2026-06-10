// example of promise resolve:
let promiseResolve = new Promise((resolve, reject) => {
    resolve("Task completed successfully!");
});

promiseResolve.then((message) => {
    console.log(message);
});


// example of promise reject:
let promiseReject = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

promiseReject
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });


// example of chaining multiple .then() methods:
let promiseChain = new Promise((resolve, reject) => {
    resolve(5);
});

promiseChain
    .then((num) => {
        console.log("First then: " + num);
        return num * 2;
    })
    .then((num) => {
        console.log("Second then: " + num);
        return num + 3;
    })
    .then((num) => {
        console.log("Third then: " + num);
    });
