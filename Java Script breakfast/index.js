 // 1. Create an array of objects, where each object represents an item in the inventory.
// Each object should have the following properties:
// id (unique identifier for the item)
// name (name of the item)
// quantity (number of items available)


// creating the arrages of inventory

const inventory = [
    {
      id: 1,
      name: "Laptop",
      quantity: 10
    },
    {
      id: 2,
      name: "Smartphone",
      quantity: 25
    },
    {
      id: 3,
      name: "Headphones",
      quantity: 15
    },
    {
      id: 4,
      name: "Monitor",
      quantity: 8
    },
    {
      id: 5,
      name: "Keyboard",
      quantity: 20
    }
  ];
//   calling the inventory arrays
  console.log(inventory);


//   Create an array of your favorite fruits. Access and print the first, third, and last fruits.

// Here we created our arrays of favourite fruits
fruits = ["Mango", "Strawberry", "Blueberry", "Pineapple", "Apple"]
// here we called the arrays for each fruit
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[4]);


// Create an array of numbers from 1 to 10
let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// Reverse the array
let reversedNumbers = numbers.reverse();

// Print the reversed array
console.log(reversedNumbers);


function printArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// 3a. Write a function to print all elements in an array using a for loop.

let fruit = ["mango,", "banana", "cherry", "Apple", "Guava", "paw-paw"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// 3b. Write a function that calculates the sum of numbers in an array.

// Array of numbers
let num = [5, 5, 5, 5, 5];

// Function to sum up the numbers in the array
function sumNumbers(num) {

    // here i Initialize the total sum

    let total = 0; 

    for (let i = 0; i < num.length; i++) {

        // here we added each number to total
        total += num[i]; 
    }

    return total; // Return the total sum
}
// Output the total sum
const sum = sumNumbers(num);
console.log("The sum of the numbers is:", sum);


// 4a. Create an array of ages. Filter the ages to find all values greater than 18

//array of ages
let ages = [16, 22, 20, 13, 34, 17, 19, 25];

// filtering the ages greater than 18
let agesGreaterThan18 = ages.filter(age => age > 18);

console.log(agesGreaterThan18); 

// 4b. Sort an array of names alphabetically.

let names = ['John', 'Alice', 'Bob', 'Charlie', 'David'];

names.sort();

console.log(names);

// Create an array of numbers. Find the first number greater than 10 using .find()

const numb = [7, 15, 12, 5, 7, 15];

const GreaterThanTen = numb.find(numb => numb > 10);

// Outputting the first number greater than 10
console.log(GreaterThanTen); 

// Use .includes() to check if a specific value exists in an array

let array = [1, 2, 3, 4, 5];

let valueToCheck = 3;

if (array.includes(valueToCheck)) {
  console.log("Value found!");
} else {
  console.log("Value not found!");
}

// Create an array of student grades (e.g., [50, 75, 80, 100]). Calculate the average grade and
// determine the highest and lowest grades.

// Create an array of student grades
let grades = [85, 92, 78, 90, 88, 76, 95, 89, 84, 91];

// Calculate the average grade
let total = grades.reduce((acc, grade) => acc + grade, 0);
let average = total / grades.length;

// Find the highest and lowest grades
let highest = Math.max(...grades);
let lowest = Math.min(...grades);

// Display the results
console.log("Average Grade:", average);
console.log("Highest Grade:", highest);
console.log("Lowest Grade:", lowest);

// 5 Write a function that takes an array and removes duplicate elements.


// 8. Create an object to represent a person with properties like name, age, and hobby. Access and
// print the name and hobby properties.

const newfunc = (name, age, work) => {
        console.log(` ${name} is ${age} years old, and likes ${work}`)
    }

    newfunc('John', 20,'football' );


// 9.Write a function greet that takes a name as a parameter and prints "Hello, [name]!".

const funct = (name) => {
    console.log(`Hello ${name}!`)
}

funct('John');

// 10. Write a function addNumbers that takes two numbers, adds them, and returns the result.

const addnum = function (num1, num2){
    console.log(num1 + num2);
}
addnum (12, 12);

// Create a function isEven that takes a number and returns true if the number is even, and false
// otherwise.

function isEven(number) {
    //here we used the modulus operator to divide 2 numbers and return remainder
    if (number % 2 === 0) {
        return "True.";
    } else {
        return "False";
    }
}
console.log(isEven(12)); 
console.log(isEven(7));

// 11. Rewrite the addNumbers function as an arrow function

const func = (num1, num2) => {
    console.log(num1 + num2);
}
func (12, 10);


// Write an arrow function that takes an array of numbers and returns the sum of all the numbers.

// Array of numbers
let num1 = [5, 5, 5, 12, 5];

// Arrow Function to sum up the numbers in the array
const ArrayOfNumbers = (num1) => {

    // here i Initialize the total sum

    let total = 0; 

    for (let i = 0; i < num1.length; i++) {

        // here we added each number to total
        total += num1[i]; 
    }

    return total; // Return the total sum
}
// Output the total sum
const sum1 = ArrayOfNumbers(num1);
console.log("The sum of the numbers is:", sum1);

// 12. Create a function introduce that takes a name, age, and hobby as arguments and returns a
// sentence like "Hi, I'm Alex. I'm 25 years old, and I love painting."

function introduce(name, age, hobby) {
    console.log(`Hi, I'm ${name}, I'm ${age} years old, and I love ${hobby}`) ;
  }
  
  // Example usage:
  let details = introduce("Alex", 25, "painting");
  console.log(details);   

// . Write a function findMax that takes an array of numbers and returns the largest number.


// let numbers1 = [1, 3, 7, 2, 5];
// function findMax(numbers1) {
//     return Math.max(numbers1);
// }

// let numbers1 = [1, 3, 7, 2, 5];
// console.log(findMax(numbers1)); // Output: 7

// Create a function filterOddNumbers that takes an array and returns a new array containing only the
// odd numbers.

// // Function to filter odd numbers
// function getOddNumbers(arr) {
//     return arr.filter(num => num % 2 !== 0);
//   }
  
//   // Example usage
//   const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const oddNumbers = getOddNumbers(numbers2);
  
//   console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

// 14. Write a function convertTemperature that converts temperatures between Celsius and
// Fahrenheit based on a given input type.

function convertTemperature(value, scale) {
    if (scale === 'C') {
      // Convert Celsius to Fahrenheit
      return (value * 9/5) + 32;
    } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius
      return (value - 32) * 5/9;
    } else {
      return 'Invalid scale. Please use "C" for Celsius or "F" for Fahrenheit.';
    }
  }
  
  // Example usage:
  console.log(convertTemperature(30, 'C')); // Converts 30°C to Fahrenheit
  console.log(convertTemperature(86, 'F')); // Converts 86°F to Celsius
  
  
//   15. Write a function calculateTip that takes a bill amount and a tip percentage and returns the total
// amount to be paid.

function calculateTip(billAmount, tipPercentage) {
    // Calculate the tip amount
    const tipAmount = (billAmount * tipPercentage) / 100;
    
    // Calculate the total amount to be paid
    const totalAmount = billAmount + tipAmount;
    
    return totalAmount;
}

// Example usage
const bill = 100;
const tip = 15;
const total1 = calculateTip(bill, tip);
console.log("Total amount to be paid: N" + total1);

// 16. Write a function isPrime that checks if a given number is a prime number.

function isPrime(num) {
    // Check if the number is less than 2
    if (num <= 1) {
        return false;
    }

    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not a prime number
        }
    }

    return true; // num is prime
}

// Example usage:
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false

// 17. Write a function calculateBMI that takes a person's weight (in kg) and height (in meters) and
// returns their BMI and a health message (e.g., "Underweight", "Normal", "Overweight").

function calculateBMI (weight, height) {
    // Calculate BMI using the formula: BMI = weight / (height * height)
    let bmi = weight / (height * height);
    
    // Determine the health message based on BMI value
    let healthMessage = '';
    if (bmi < 18.5) {
        healthMessage = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        healthMessage = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        healthMessage = 'Overweight';
    } else {
        healthMessage = 'Obese';
    }
    
    // Return BMI and the health message
    return {
        bmi: bmi.toFixed(2),
        message: healthMessage
    };
}

// Example usage:
let result = calculateBMI (70, 1.75);
console.log("BMI:", result.bmi);  // 
console.log("Health Message:", result.message);  


// 18. Create a function validatePassword that takes a string and checks if it meets criteria (e.g., at least
//     8 characters, contains numbers and letters).

function validatePassword(inputString) {
    // Check if the string has at least 8 characters
    if (inputString.length < 8) {
        return false;
    }

    // Check if the string contains at least one letter and one number
    const hasLetter = /[a-zA-Z]/.test(inputString);
    const hasNumber = /\d/.test(inputString);

    if (!hasLetter || !hasNumber) {
        return false;
    }

    return true;
}

// Example usage:
const inputString = "abc12345";
console.log(validatePassword(inputString));  // Output: true




 








  