//  // This is my first JavaScript code!
//  console.log('Hello World');
 
 
//  // Cannot be a reserved keyword
//  // Should be meaningful
//  // Cannot start with a number (1name)
//  // Cannot contain a space or hyphen (-)
//  // Are case-sensitive
 
// let firstName1 = 'Berra';
// let lastName = 'Ozgun';

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let name = 'Berra'; // String Literal
// let age = 14; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName2 = undefined;
// let selectedColor = null;

// console.log(name, age, isApproved, firstName2, selectedColor);
// //test

// let person = {
//     name: 'Berra',
//     age: 14
// };

// //Dot notation
// person.name = 'John';

// //Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

// function greet (greetName, greeetLastname) {
//     console.log('Hello World ' + greetName + greeetLastname);

// }

// greet('John', ' Smith');
// greet('Mary',' Baker');


// //FUNCTIONS

// //Performing a Task
// function best (yourName){
//     console.log(yourName + 'is the best programmer in the world')

// }
// best ('Berra ');

// //Calculating a Value
// function square(number) {
//     return number * number;
// }
// console.log(square(2));

// // Area Assignment
// function area(base, height) {
//     return base*height/2
// }

// console.log(area(2,8))

// for (let i = 0; i < 5; i++) {
//     console.log('i am the best programmer');
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// function power (base,power) {
//     console.log(base**power)
// }
// power(3,3);

// function exponent(base, exponent) {
//     result=1;
//     for(let i=0; i<exponent ; i++)
//     result= result* base;
// return result
// }
// console.log(power(2,4))

// // Write a function that takes 2 numbers. And start with the first numbers and add all the numbers upto the second number. Returns the total. Ex: total (4,8) should return 4+5+6+7+8=30

// function add(num1, num2) {
//     let result = 0;
//     for(let i = num1; i <= num2; i++) {
//     result += i;
//     }
//     return(result);
// };
// console.log(add(4, 8));

/*
let counter=1;
while (counter<101){
    console.log(counter)
    counter++
}

for(let i=1; i<101 ; i++){
    console.log(i)
}

let password="magnolia123"
let userInput="sdsf"
while (userinput =! password){
    userInputprompt("Please enter the righjt password")
}
alert ("Access Granted!!")


let myName=prompt("Please say your name")
alert("Welcome "+myName+ " to your website")



let hour = 10;
 
if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
}
else if (hour >= 12 && hour < 17) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Evening')
}

userInput=pareInt(prompt("Enter a number"))
alert (userInput + 3)
alert ("Access Granted!!")

let yourAge = prompt("Your Age?");

if(yourAge > 0 && yourAge <3) {
    alert("You are a baby");
}

else if (yourAge >=5 && yourAge <13){
    alert("You are a toddler");
}

else if (yourAge >=12 && yourAge <20) {
    alert("You are a teenager");
}

else if (yourAge >=20 && yourAge <32){
    alert("You are a young adult");
}

else if (yourAge >= 32 && yourAge <65){
    alert("You are a adult");
}

else {
    alert("You are a senior");
}
