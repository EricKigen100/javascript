// JavaScript function that adds two numbers and returns the result:


function addNumbers(a, b) {
  return a + b;
}

// Example usage:
const number1 = 5;
const number2 = 10;

const sum = addNumbers(number1, number2);
console.log('The sum is:', sum);

/* 
This code defines a function called `addNumbers` that takes two parameters `a` and `b`, adds them together using the `+` operator, and then returns the result. The example usage demonstrates how to use this function by passing two numbers (`number1` and `number2`) and storing the result in the `sum` variable, which is then logged to the console.
<hr> */

//write a function that checks if a number is divisible by three and returns true else it returns false

function isDivisibleByThree(number) {
    return number % 3 === 0;
  }
  const num=15;
  console.log(isDivisibleByThree(num));

    /* console.log(isDivisibleByThree(9)); // Output: true
    console.log(isDivisibleByThree(10)); // Output: false */