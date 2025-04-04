// create 5 for loops consisting of 2 multiplication table function which is 5 & 6

function  multiplicationTable(x){
    console.log(`multiplication table for ${x}:`);
    for (let y = 1; y <= 30; y++){
        let sum = x * y;
    console.log(`${x} x ${y} = ${sum}`); //string interpulation
    }
}
multiplicationTable(5)

 // using arrow function Arrow functions

    const func = (newnumber) => {
        console.log(`This will be multiplying for the number ${newnumber}:`);
        for (let i = 0; i <= 30; i ++){
            let total = i * newnumber;
            console.log(`${i} x ${newnumber} = ${total}`)
        }
    }
    func(6);

    // This loop will print numbers from 1 to 10
    
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    // This loop will print each fruit in an array.

    let fruits = ["mango,", "banana", "cherry", "Apple", "Guava", "paw-paw"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// This loop will print each character in a string.

let word = "NextGenDevelopers";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

//////////////////// Number 2.. Create 3 switch functions and 2 if-else function ////////////////////////////////////

// This funtion will print a range of age of developers

function checkAge(age) {
    switch (true) {
        case (age >= 0 && age <= 12):
            console.log("starter dev");
            break;

        case (age >= 13 && age <= 17):
            console.log("intermiddiate dev");
            break;

        case (age >= 18 && age <= 64):
            console.log("developer");
            break;

        case (age >= 65 && age <= 80):
            console.log("Senior dev");
            break;

        default:
            console.log("Pro dev");
    }
}

checkAge(50);


// This function will print number of days using SWITCH statment

function numberOfDays(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

numberOfDays(7);


//This function checks if a number is even or odd.

function checkEvenOdd(number) {
    //here we used the modulus operator to divide 2 numbers and return remainder
    if (number % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}
console.log(checkEvenOdd(12));  
console.log(checkEvenOdd(7)); 


// This function will classifies people based on their age difference and groups(child, teenager, adult, senior).

function classifyAge(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else if (age >= 20 && age <= 64) {
        return "Adult";
    } else if (age >= 65) {
        return "Senior";
    } else {
        return "Invalid age";
    }
}

console.log(classifyAge(15)); 
console.log(classifyAge(50)); 


// No 3. use example to differenciate string interpulation and concatenation

// An example of string interpulation

let getName = function(firstname, lastname){
        // let name = ' i am a girl, pleae what do you want'
        console.log(`welcome to the team ${firstname} ${lastname}`); //String interpulation
    }

    getName("John", "Adegoke");


    // An example of string concatenation using the + operator


let firstName = "John";
let lastName = "Adegoke";
let fullName = firstName + " " + lastName; //string concatenation
console.log(fullName);

// second example using funtion

function getFullName(firstName, lastName) {
        console.log(firstName + " " + lastName)
  }
  getFullName("Tinuke", "Adeyemi");
  






    

   