//question 1 check multiple of 5
console.log("Question 1");
console.log("Check multiple of 5");

let num = prompt("Enter a number: ");

if(num % 5 == 0){
    console.log(num, " is a multiple of 5");
}
else{
    console.log(num, " is not a multiple of 5");
}

//question 2 give grades to a student based on their marks
console.log("Question 2");
console.log("Give grades to a student based on their marks");

let marks = prompt("Enter the marks: ");

if(marks >= 100){
    console.log("Invalid marks");
}
else if(marks >= 80){
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B");
}
else if(marks >= 60){
    console.log("Grade C");
}
else if(marks >= 50){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

//question 3 print even numbers between 1 to 100
console.log("Question 3");
console.log("Print even numbers between 1 to 100");

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//question 4 guessing game
console.log("Question 4");
console.log("Guessing game");

import math from "mathjs";
let ran = math.randomInt(1, 100);
let count = 0;

do{
    let guess = prompt("Enter your guess: ");
    count++;
    if(guess == ran){
        console.log("Congratulations! You have guessed the correct number in ", count, " attempts");
    }
    else if(guess < ran){
        console.log("Try a higher number");
    }
    else{
        console.log("Try a lower number");
    }
} while(guess != ran);

