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
