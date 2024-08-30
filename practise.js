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