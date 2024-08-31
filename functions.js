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
        console.log(msg);
    }
}
console.log(printer("Hello",5));



