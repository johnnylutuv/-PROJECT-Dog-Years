// Step1 my age
var myAge = 23;

// Step2 this variable value will change
var earlyYears = 21;

// Step 3
earlyYears *= 10.5;

// Step4
myAge -= 2;
// this value will change later.
var laterYears = 21;

// Step 5
laterYears *= 4;

// Step 6
// Check earlyYears and LaterYears by console.logging

// Step7 my Age in dog years
var myAgeInDogYears = (earlyYears += laterYears);


// Step 8 my name, transform to lower case
var myName = 'Aung';

console.log('My name is ${myName}. I am ${myAge} years ol in human years which is ${myAgeInDogYears} years old in dog years. ')
