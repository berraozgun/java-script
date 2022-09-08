 // This is my first JavaScript code!
 console.log('Hello World');
 
 
 // Cannot be a reserved keyword
 // Should be meaningful
 // Cannot start with a number (1name)
 // Cannot contain a space or hyphen (-)
 // Are case-sensitive
 
let firstName1 = 'Berra';
let lastName = 'Ozgun';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let name = 'Berra'; // String Literal
let age = 14; // Number Literal
let isApproved = false; // Boolean Literal
let firstName2 = undefined;
let selectedColor = null;

console.log(name, age, isApproved, firstName2, selectedColor);
//test

let person = {
    name: 'Berra',
    age: 14
};

//Dot notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet (greetName, greeetLastname) {
    console.log('Hello World ' + greetName + greeetLastname);

}

greet('John', ' Smith');
greet('Mary',' Baker');


//FUNCTIONS

//Performing a Task
function best (yourName){
    console.log(yourName + 'is the best programmer in the world')

}
best ('Berra ');

//Calculating a Value
function square(number) {
    return number * number;
}
console.log(square(2));

// Area Assignment
function area(base, height) {
    return base*height/2
}

console.log(area(2,8))
