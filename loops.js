//for loop
for (let i = 0; i < 5; i++) {
    console.log("Satyam Kumar Jha");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//sum of first n natural numbers
let n = prompt("Enter a number: ");
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first ", n, " natural numbers is: ", sum);

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do {
    console.log(j);
    j++;
}while (j < 5);

//for of loop
//for of loop is used to iterate over the elements of an array or string
arr = [1, 2, 3, 4, 5];

for (let element of arr) {
    console.log(element);
}

//for in loop
//for in loop is used to iterate over the keys of an object and arrays
let obj = {
    name: "Satyam",
    age: 20,
    city: "Ghaziabad",
    country: "India"
};

for (let key in obj) {
    console.log(key, ":", obj[key]);
}