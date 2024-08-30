//initialisation
var str = "Hello World!";

//length
console.log(str.length);

//index
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

//concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);

//template literals
let name = "John";
let lastName = "Doe";
console.log(`Hello, ${name} ${lastName}`);

//string methods
//toUpperCase
console.log(str.toUpperCase());

//toLowerCase
console.log(str.toLowerCase());

//trim
let str3 = "    Hello World!    ";
console.log(str3.trim());

//slice
console.log(str.slice(0, 5));

//concat
console.log(str.concat(str1, str2));

//replace
console.log(str.replace("Hello", "Hi"));

//charAt
let p = prompt("Enter a position: ");
console.log(str.charAt(p));