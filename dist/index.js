"use strict";
// 1 - misol
let ism = "John Doe";
let age = 30;
let isStudent = true;
let hobbies = ["Reading", "Gaming", "Coding"];
function greet(person) {
    return `Hello, ${person}`;
}
function calculateSum(a, b) {
    return a + b;
}
function isAdult(personAge) {
    return personAge >= 18;
}
// 2 - misol
function countPositiveNumbers(arr) {
    let res = 0;
    arr.forEach((item) => {
        item >= 0 ? (res += 1) : null;
    });
    console.log(res);
}
// countPositiveNumbers([1, 2, 3]);
// 3 - misol
function fizzBuzz(n) {
    for (let i = 0; i < n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("FizzBuzz");
        }
    }
}
// fizzBuzz(15);
// 4 - misol
function sumArray(arr) {
    let sum = 0;
    arr.forEach((item) => (sum += item));
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 5 - misol
function countWords(str) {
    let res = str.split(" ").length;
    return res;
}
// console.log(countWords("Hello, world"));
// 6 - misol
function findMax(arr) {
    let res = 0;
    arr.forEach((item) => {
        item > res ? (res = item) : null;
    });
    return res;
}
// console.log(findMax([1, 2, 3, 4, 5, 6, 1, 2, 3]));
