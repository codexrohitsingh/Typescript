"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 1 : Write a function that greets the user given there first name
function Greeting(firstName) {
    console.log("Hello " + firstName);
}
Greeting("Rohit");
// Problem 2 : Write a function that calculates the sum of two function 
function Sum(a, b) {
    return a + b;
}
console.log(Sum(4, 5));
// Problem 3 : Return true or false based on use is 18 plus or not
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(18));
//# sourceMappingURL=a.js.map