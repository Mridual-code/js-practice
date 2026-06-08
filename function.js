// Function Declaration 1
function myself() {
    console.log("My name is Mridul");
}
myself();

// Function Declaration 2
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

// Function Expression 1
const greetings = function(name) {
    console.log("Hello " + name);
};
greetings("Mridul");

// Function Expression 2
const multiply = function(x, y) {
    console.log(x * y);
};
multiply(5, 10);

// Arrow Function 1
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 3));

// Arrow Function 2
const divide = (x, y) => x / y;
console.log(divide(20, 5));

// Callback Function 1
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Goodbye!");
}

greet("Mridul", bye);

// Callback Function 2
function processUser(callback) {
    callback();
}

processUser(() => {
    console.log("User processed");
});