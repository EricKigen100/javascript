/* Functional programming is a paradigm in programming that focuses on writing code by using functions and treating them as first-class citizens. In JavaScript, you can leverage functional programming concepts to write cleaner, more concise, and often more maintainable code. Here are some key functional programming concepts and how they can be applied in JavaScript:

Pure Functions: Functions that produce the same output for the same input and have no side effects. They don't modify variables outside their scope or rely on external state.

javascript
Copy code */
// Pure function example
function add(a, b) {
  return a + b;
}
/* Immutability: Avoiding changing state or mutating data. Instead of modifying existing data, create new data. */

/* javascript
Copy code */
// Using immutability with arrays
const originalArray = [1, 2, 3, 4];
const newArray = [...originalArray, 5]; // Creating a new array with spread syntax

// Using immutability with objects
const originalObject = { a: 1, b: 2 };
const newObject = { ...originalObject, c: 3 }; // Creating a new object with spread syntax
/* Higher-Order Functions: Functions that either take one or more functions as arguments or return a function as a result.

javascript
Copy code
 */// Higher-order function example
function higherOrderFunction(callback) {
  return callback();
}

function sayHello() {
  return "Hello!";
}

/* higherOrderFunction(sayHello); // Passing the function as an argument
Function Composition: Building larger functions by combining smaller functions together.

javascript
Copy code */
// Function composition example
function addOne(number) {
  return number + 1;
}

function multiplyByTwo(number) {
  return number * 2;
}

const composedFunction = (input) => multiplyByTwo(addOne(input)); // Composing functions
/* Map, Filter, and Reduce: Functional programming often relies on these higher-order array methods to perform operations on arrays in a functional manner.

javascript
Copy code */
// Using map to transform array elements
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

// Using filter to filter elements in an array
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Using reduce to perform calculations on array elements
/* const sum = numbers.reduce((acc, num) => acc + num, 0);
By embracing these concepts, you can write more declarative and concise code, leading to improved readability and maintainability in your JavaScript applications. */


//CLASS EXAMPLES

//First-class Functions--- Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as urguments, and returned from other functions.

//first-class citizens include

let dog1={
    breed:"kienyeji",
    color:"black",
    isVaccinated:true
}
let dog2={
    breed:"chiwawa",
    color:"blackwhite",
    isVaccinated:false
};

function testCbFunc(name){
  console.log(name + "is vaccinated");
}

function checkIfDogIsVaccinated(arg,arg2){
    if(arg.isVaccinated){
      arg2(arg.breed);
        return true;
    }else{
        return false;
    }
}

/* //this function takes in an object as an argument
console.log(checkIfDogIsVaccinated(dog1));
console.log(checkIfDogIsVaccinated(dog2)); */

checkIfDogIsVaccinated(dog2,testCbFunc)



const colors=["red","blue","yellow"];

function modifyColor(rangi){
  console.log(rangi +"ish");
}

modifyColor("green")
