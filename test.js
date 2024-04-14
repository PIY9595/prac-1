// console.log("welcome");
// fullname = "harry poter";

// function myfirstcode() {
//   let strg = "";
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j <= i; j++) {
//       strg += "*";
//     }
//     for (let k = 2; k > i; k--) {
//       strg += "-";
//     }

//     for (let j = 0; j <= i; j++) {
//       strg += "*";
//     }
//     for (let k = 2; k > i; k--) {
//       strg += "-";
//     }
//     strg += "\n";
//   }
//   console.log(strg);
// }

// myfirstcode();

// function mysecondcode() {
//   let strng = "";
//   for (let k = 0; k < 3; k++) {
//     for (let l = 2; l > k; l--) {
//       strng += "-";
//     }
//     for (let m = 0; m < k; m++) {
//       strng += "*";
//     }
//     for (let m = 0; m <= k; m++) {
//       strng += "*";
//     }
//     for (let l = 2; l > k; l--) {
//       strng += "-";
//     }
//     strng += "\n";
//   }
//   console.log(strng);
// }

// mysecondcode();

// function mythirdcode() {
//   let string = "";
//   for (let n = 0; n < 4; n++) {
//     for (let m = 0; m <= n; m++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   for (let n = 0; n < 3; n++) {
//     for (let m = 3; m > n; m--) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

// // mythirdcode();
// // const boxes = [sankeboard];
// // const sankeboard = {
// //   isladder: true,
// //   isnake: false,
// //   color: yellow,
// //   number: 1,
// // };

// // function areaofcircle(r) {
// //   let radius = r;

// //   const pie = 3.14;
// //   return pie * radius ** 2;
// // }

// // areaofcircle(2);

// // function simpleinterest(priciple, rate, time) {
// //   let p = priciple;
// //   let r = rate;
// //   let t = time;
// //   return (p * r * t) / 100;
// // }

// // console.log(simpleinterest(100, 10, 3));

// let gameboard = [];
// for (i = 0; i < 99; i++) {
//   let box = {
//     issnake: i / 5 == 0,
//     isladder: i / 8 == 0,
//   };
//   gameboard[i] = box;
// }
// console.log(gameboard);

// var number = prompt("Enter a number: ");

// if (number % 2 == 0) {
//   console.log("the number is even");
// } else {
//   console.log("the number is odd");
// }

// var number = prompt("Enter a number: ");

// if (number > 0) {
//   console.log("the number is positive");
// } else if (number == 0) {
//   console.log("the number is zero");
// } else {
//   console.log("the number is negative");
// }

// function checkleapyear() {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + ` is a leap year`);
//   } else {
//     console.log(year + ` is not leap year`);
//   }
// }

// let year = prompt("enter a year");
// checkleapyear(year);

// let year = prompt("enter a number");

// if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//   console.log(year + ` is a leap year`);
// } else {
//   console.log(year + ` is not leap year`);
// }

// program to find the largest three numbers

// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));

// let largest;

// if (num1 >= num2 && num1 >= num3) {
//   largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   largest = num2;
// } else {
//   largest = num3;
// }

// alert("The largest number is " + largest);

// palindrome or not

// function checkPalindrome(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// const string = prompt("Enter a string: ");
// const value = checkPalindrome(string);
// console.log(value);

// simple calculator

// program for a simple calculator

// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// let result;

// if (operator == "+") {
//   result = number1 + number2;
// } else if (operator == "-") {
//   result = number1 - number2;
// } else if (operator == "*") {
//   result = number1 * number2;
// } else {
//   result = number1 / number2;
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);

let i = 0;

while (i < 10) {
  i++;
  if (i == 7) {
    continue;
  }
  console.log(i);
}
