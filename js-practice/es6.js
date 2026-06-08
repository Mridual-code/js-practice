//using let to declare a variable 1:
let age = 20;
console.log(age);
//using let to declare a variable 2:
let city = "ludhiana"
city = "chandigarh";
console.log(city);
//using const to declare a variable 1:
const pi = 3.14;
console.log(pi);
//using const to declare a variable 2:
const college = "UPES"
console.log(college);
//Arrow function 1:
const greet =() => "Hello!";
console.log(greet());
//Arrow function 2:
const square = num => nume * num;
console.log(square(5));
//destructuring  1:
let numbers = [1, 2, 3];
let [a,b] = numbers;
console.log(a);
console.log(b);
//destructuring 2:
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b); 
//spread operator 1:
let number = [1,2,3,4,5,6]
consle.log(...number);
conole.log(Math.max(...number));
//spread operator 2:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);
//rest parameter 1:
function sumUp(...toAdd){
    let result = 0;
    for(leti = 0; i < toAdd.length; i++){
        result += toAdd[i];
}return result;}
console.log(sumUp(1,2,3,4,5));
//rest parameter 2:
function total(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(total(10, 20, 30));
