# js-practice
# JavaScript Guide: Core Concepts and Functions

A beginner-friendly breakdown of core features and function types in JavaScript.

## Table of Contents
- [ES6 Core Concepts](#es6-core-concepts)
  - [let and const](#let-and-const)
  - [Arrow Functions (ES6)](#arrow-functions-es6)
  - [Destructuring](#destructuring)
  - [Spread and Rest Operators](#spread-and-rest-operators)
- [Functions in JavaScript](#functions-in-javascript)
  - [Function Declaration](#function-declaration)
  - [Function Expression](#function-expression)
  - [Arrow Functions](#arrow-functions)
  - [Callback Functions](#callback-functions)

---

## ES6 Core Concepts

ES6 is a major update to JavaScript that added new features to make writing code faster and easier.

### let and const
These are new ways to create variables, which are boxes used to store data. They replace the old way of using the word "var".

* **Block Scope**: Variables made with let and const only work inside the specific curly braces where you created them.
* **Safer to Use**: You cannot use these variables until the code actually reads the line where they are made.
* **const is Fixed**: Use const for data that you do not want to change. Use let if you need to update the data later.

### Arrow Functions (ES6)
This is a newer, shorter way to write functions using a fat arrow symbol.

* **Less Typing**: You can skip writing the word "function" entirely.
* **Auto-Return**: If your code fits on one single line, it automatically sends back the result without needing the word "return".
* **Smart Context**: They share the same "this" keyword settings as the code around them, which prevents bugs when dealing with objects.

### Destructuring
This is a shortcut trick to pull specific pieces of data out of arrays or objects and save them into separate variables.

* **Saves Lines**: You do not have to write a separate line of code for every single piece of data you want to extract.
* **Fallback Values**: You can set a backup value to use just in case the data you are looking for is missing.
* **Renaming**: You can rename the pieces of data as you pull them out.

### Spread and Rest Operators
Both of these features use three dots in a row, but they do completely opposite jobs.

* **Spread Operator**: Takes an array or object and unpacks all its individual pieces into a new place, like pouring items out of a bag.
* **Rest Operator**: Gathers individual separate values and bundles them together into one single array package.

---

## Functions in JavaScript

A function is a block of code designed to perform a particular task. You build it once, and then you can run it whenever you need it.

### Function Declaration
This is the traditional way to make a function by starting the line with the word "function" and giving it a clear name.

* **Hoisting**: JavaScript reads these functions before running any other code.
* **Flexible Placement**: You can call and run this function even before the line where you actually wrote it down.
* **Own Context**: It creates its own independent setup for the "this" keyword every time you run it.

### Function Expression
This happens when you create a function and immediately save it inside a variable.

* **Strict Order**: You cannot run this function until the computer reads the exact line where the variable is created.
* **No Name Needed**: These are often anonymous, meaning the function itself does not need a name because the variable holds it.
* **Easy to Pass**: Because it lives inside a variable, you can pass it around your code just like a regular piece of data.

### Arrow Functions
This is the same short function style from the ES6 section, used to make standard function expressions cleaner.

* **Clean Look**: Strips away extra words to keep your codebase looking neat and easy to read.
* **No Independent Context**: They do not make their own "this" keyword settings.
* **Inherited Context**: They borrow the setup from the code block that sits directly around them.

### Callback Functions
This is a standard function that you pass into another function as if it were a simple argument or piece of data.

* **Delayed Running**: The main function decides exactly when and if the callback function should start running.
* **Great for Waiting**: They are perfect for actions that take time, like waiting for a user to click a button or downloading a file.
* **Task Splitting**: They help separate your code into smaller, single-purpose tasks that work together.
