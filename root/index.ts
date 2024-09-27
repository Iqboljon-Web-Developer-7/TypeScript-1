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
fizzBuzz(15);
