//function declaration 1:
function myself(){
    console.lof("my name is Mridul");
}
myself();
 //function declaration 2:
function add(a,b){
    return a+b;
}
console.log(add(5,10));
//function expression 1:
const greetings = function(name){
    console.log("Hello " + name);
}
greetings("Mridul");
//function expression 2:
const multiply= function(x,y){
    console.log(x*y),
}
multiply(5,10);
// arrow function 1:
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 3));
// arrow function 2:
const divide = (x, y) => x / y;
console.log(divide(20, 5));
//callback function 1:
function greet(name, callback) {
    console.log("Hello " + name);
}
functionbye(){
    console.log("Goodbye!");
}greet("Mridul", bye);
//callback function 2:
function processUser(callback) {
    callback();
}
processUser(() => {
    console.log("User processed");
});