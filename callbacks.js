//basic call back example :
function greet(callback){
    console.log("Hello");
    callback();
}
function sayGoodbye(){
    console.log("Goodbye");
}
greet(sayGoodbye);
// call back example with parameters:
function add(num1, num2, callback){
    const sum = num1 + num2;
    callback(sum);
}
function displayResult(result){
    console.log("The result is: " + result);
}
add(5, 10, displayResult);
//Callback with setTimeout :
function delayedMessage(callback) {
  console.log("Wait for 7 seconds...");
  setTimeout(callback, 7000); 
}
function showMessage() {
  console.log("This message is delayed!");
}
delayedMessage(showMessage);
//example of promise resolve:
let promiseResolve = new Promise((resolve, reject) => {
  resolve("Task completed successfully!");
});
promiseResolve.then((message) => {
  console.log(message);
});


//example of promise reject:
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


  //example of chaninig multiple.then() methods:
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
