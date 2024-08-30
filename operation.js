//arithmetic operation
let a = 10;
let b = 20;

console.log("a + b = ", a + b);                                                 //addition
console.log("a - b = ", a - b);                                                 //subtraction
console.log("a * b = ", a * b);                                                 //multiplication
console.log("a / b = ", a / b);                                                 //division
console.log("a % b = ", a % b);                                                 //modulus or remainder
console.log("a ^ b = ", a ** b);                                                //exponentiation

console.log("a++ = ", a++);                                                     //post increment
console.log("updated a = ", a);                                                 //new value of a after operation
console.log("a-- = ", a--);                                                     //post decrement
console.log("updated a = ", a);                                                 //new value of a after operation
console.log("++a = ", ++a);                                                     //pre increment
console.log("updated a = ", a);                                                 //new value of a after operation
console.log("--a = ", --a);                                                     //pre decrement
console.log("updated a = ", a);                                                 //new value of a after operation

//assignment operation
let x = 10;

console.log("x = ", x);
x += 5;                                                                         //x = x + 5
console.log("x += 5 = ", x);
x -= 5;                                                                         //x = x - 5
console.log("x -= 5 = ", x);
x *= 5;                                                                         //x = x * 5
console.log("x *= 5 = ", x);
x /= 5;                                                                         //x = x / 5
console.log("x /= 5 = ", x);
x %= 4;                                                                         //x = x % 4
console.log("x %= 4 = ", x);
x **= 5;                                                                        //x = x ** 5
console.log("x **= 5 = ", x);

//comparison operation
let p = 10;
let q = 20;
let o = "10"; 

console.log("p = ", p, " q = ", q);
console.log("p == q = ", p == q);                                               //equal to
console.log("p != q = ", p != q);                                               //not equal to
console.log("p > q = ", p > q);                                                 //greater than
console.log("p < q = ", p < q);                                                 //less than
console.log("p >= q = ", p >= q);                                               //greater than or equal to
console.log("p <= q = ", p <= q);                                               //less than or equal to
console.log("p == o = ", p == o);                                               //equal to
console.log("p === o = ", p === o);                                             //strict equal to
console.log("p != o = ", p != o);                                               //not equal to
console.log("p !== o = ", p !== o);                                             //strict not equal to

//logical operation
let r = true;
let s = false;

console.log("r = ", r, " s = ", s);
console.log("r && s = ", r && s);                                               //logical AND
console.log("r || s = ", r || s);                                               //logical OR
console.log("!r = ", !r);                                                       //logical NOT
