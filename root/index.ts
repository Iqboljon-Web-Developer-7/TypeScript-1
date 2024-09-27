// 1 - misol
let ism: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: String[] = ["Reading", "Gaming", "Coding"];

function greet(person: String): String {
  return `Hello, ${person}`;
}

function calculateSum(a: number, b: number): number {
  return a + b;
}

function isAdult(personAge: number): boolean {
  return personAge >= 18;
}

// 2 - misol
function countPositiveNumbers(arr: number[]) {
  let res: number = 0;
  arr.forEach((item: number): void => {
    item >= 0 ? (res += 1) : null;
  });
  console.log(res);
}

// countPositiveNumbers([1, 2, 3]);

// 3 - misol
function fizzBuzz(n: number): void {
  for (let i = 0; i < n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("FizzBuzz");
    }
  }
}
// fizzBuzz(15);

// 4 - misol
function sumArray(arr: number[]): number {
  let sum: number = 0;

  arr.forEach((item: number) => (sum += item));
  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 5 - misol
function countWords(str: string): number {
  let res: number = str.split(" ").length;

  return res;
}

// console.log(countWords("Hello, world"));

// 6 - misol
function findMax(arr: number[]): number {
  let res: number = Math.max(...arr);
  return res;
}
// console.log(findMax([1, 2, 3, 4, 5, 6, 1, 2, 3]));

// 7 - misol
function findMin(arr: number[]): number {
  let res: number = Math.min(...arr);
  return res;
}
// console.log(findMin([9, 2, 3, 4, 1, 2, 3, 4]));

// 8-misol
function contains(arr: (number | string)[], target: string | number): boolean {
  if (arr.includes(target)) {
    return true;
  }
  return false;
}

// console.log(contains([1, 2, 3, "salom", 4], "salom"));
// 9-misol
function reverseArray(arr: (number | string)[]): (string | number)[] {
  return arr.reverse();
}

// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// 10-misol
function capitalizeWords(str: string): string {
  let res: string = "";
  res = str
    .split(" ")
    .map((item) => {
      let helper: string = item[0].toUpperCase();
      return `${helper}${item.slice(1)}`;
    })
    .join(" ");

  return res;
}

// console.log(capitalizeWords("Hello world salom"));
// 11-misol
const average = (arr: number[]) =>
  arr.reduce((prev, current) => prev + current, 0) / arr.length;

// console.log(average([1, 2, 3, 4]));

// 12-misol
function filterArr(arr: any[]): number[] {
  let helper: number[] = [];
  arr.reduce((prev, current) => prev == current && helper.push(current));
  return helper;
}

console.log(filterArr([1, 1, 2, 2, 3, 4]));
