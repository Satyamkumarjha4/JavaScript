//we will study the concept of function in javascript
//function is a block of code that can be called and executed whenever required

//function declaration
function greet(){
    console.log("Hello");
}

//function call
greet();

//function with parameters
function greetWithName(name){
    console.log("Hello "+name);
}

greetWithName("John");

//function with return value
function add(a,b){
    return a+b;
}

console.log(add(2,3));
c = add(5,6);
console.log(c);

//function with multiple return values
function addSub(a,b){
    return [a+b,a-b];
}

result = addSub(10,5);

//arrow function
const multiply = (a,b) => a*b;
console.log(multiply(2,3));

const printer = (msg,n) => {
    for(i=0;i<n;i++){
        console.log(`${msg}${i}`);
    }
}
console.log(printer("Hello",5));

//foreach loop
//it is used to iterate over an array and do work on each element
let arr = [1 ,5 ,3 ,6 ,4 ,7 ,2 ,4];


arr.forEach((val) => {
    console.log(val*val);
});

//map function
//it is used to iterate over an array and return a new array with the same length with the elements modified
let newArr = arr.map((val) => val*val);
console.log(newArr);

//filter function
//it is used to iterate over an array and return a new array with the elements that satisfy the condition
let evenArr = arr.filter((val) => val%2==0);
console.log(evenArr);

//reduce function
//it is used to reduce an array to a single value
let sum = arr.reduce((acc,val) => acc+val);
console.log(sum);

//largest in an array
let largest = arr.reduce((res , curr) => {
    if (res>curr){
        return res;
    }
    else{return curr;}
})
console.log(largest);