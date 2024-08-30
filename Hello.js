//First Program: Hello World
console.log('Hello World');

//Variables and Data Types
fullname = 'John Doe';                                // String
age = 30;                                             // Number
console.log("Name: ",fullname,"  Age: ", age);

raduis = 13.5;                                        // Float
a = null;                                             // Null
b = undefined;                                        // Undefined
isname = true;                                        //boolean
console.log("Raduis: ",raduis,"  Null: ", a,"  Undefined: ", b,"  Boolean: ", isname);

//Use of let and const
let x = 5;
console.log(x);
x = 10;                                               //Reassign is allowed
console.log(x);

const PI = 3.14;                                      //Reassign is not allowed
console.log(PI);

let y;                                                //Declaration without initialization is allowed for let
console.log(y);                                       //Undefined is printed as the data type is not assigned

let z = 12;                                           //Global scope 
console.log(z);
{
    let z = 13;                                       //Block level scope
    console.log(z);
}
console.log(z);                                       //let and const have block level scope

