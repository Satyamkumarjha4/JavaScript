//First Program: Hello World
console.log('Hello World');

//Variables and Data Types
fullname = 'John Doe';                                                                              // String
age = 30;                                                                                           // Number
console.log("Name: ",fullname,"  Age: ", age);

raduis = 13.5;                                                                                      // Float
a = null;                                                                                           // Null
b = undefined;                                                                                      // Undefined
isname = true;                                                                                      //boolean
console.log("Raduis: ",raduis,"  Null: ", a,"  Undefined: ", b,"  Boolean: ", isname);

console.log('Data type of fullname variable is', typeof fullname);
console.log('Data type of age variable is', typeof age);
console.log('Data type of raduis variable is', typeof raduis);
console.log('Data type of a variable is', typeof a);
console.log('Data type of b variable is', typeof b);
console.log('Data type of isname variable is', typeof isname);

let student = {name: 'John', age: 25, cgpa: 9.8, isPass: true};                                     //Object
console.log(student);
console.log('Data type of student variable is', typeof student);
console.log(student.name, student.age, student.cgpa, student.isPass);                               //Dot notation
console.log(student['name'], student['age'], student['cgpa'], student['isPass']);                   //Bracket notation

let classmate = ['John', 'Rahul', 'Smith', 'Marry', 'Robin'];                                       //Array
console.log(classmate);
console.log('Data type of classmate variable is', typeof classmate);




//Use of let and const
let x = 5;
console.log(x);
x = 10;                                                                                             //Reassign is allowed
console.log(x);

const PI = 3.14;                                                                                    //Reassign is not allowed
console.log(PI);

let y;                                                                                              //Declaration without initialization is allowed for let
console.log(y);                                                                                     //Undefined is printed as the data type is not assigned

let z = 12;                                                                                         //Global scope
console.log(z);
{
    let z = 13;                                                                                     //Block level scope
    console.log(z);
}
console.log(z);                                                                                     //let and const have block level scope

