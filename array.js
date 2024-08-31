//initialisation
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);

//question 1 to find the average marks of a student
console.log("Question 1");
console.log("Find the average marks of a student");

let marks = [80, 70, 60, 50, 40];
let sum = 0;
for(let i = 0; i < marks.length; i++){
    sum += marks[i];
}
let avg = sum / marks.length;
console.log("Average marks: ", avg);

//question 2 for given array of price of 5 items all have a dicount of 10% now change the array to show the discounted price
console.log("Question 2");
console.log("For given array of price of 5 items all have a dicount of 10% now change the array to show the discounted price");

let price = [250, 645, 300, 900, 50];

for(let i = 0; i < price.length; i++){
    price[i] = price[i] - (price[i] * 0.1);
}
console.log(price);

//array methods
//push
console.log("push");
arr.push(6);
console.log(arr);

//pop
console.log("pop");
arr.pop();
console.log(arr);

//toString
console.log("toString");
let str = arr.toString();
console.log(str);
console.log(arr);

//concat
console.log("concat");
let arr1 = [7, 8, 9];
let arr2 = arr.concat(arr1);
console.log(arr2);

//shift (a remove an element from the beginning of the array)
console.log("shift");
arr.shift();
console.log(arr);

//unshift (to add a value at the begining of the array)
console.log("unshift");
arr.unshift(0);
console.log(arr);

//splice (to add or remove elements from an array)
console.log("splice");
arr.splice(2, 0, 2.5);
console.log(arr);

//slice (to copy a part of an array)
console.log("slice");
let arr3 = arr.slice(1, 4);
console.log(arr3);

