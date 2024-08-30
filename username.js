//this program that will generate a random username based on the user's first and last name.
let fullName = prompt("Enter your full name: ");
fullName = fullName.replace(" ", "");
let num = Math.floor(Math.random() * 100);
fullName = fullName.toLowerCase();

username = "@" + fullName + num;
console.log(`Your username is ${username}`);