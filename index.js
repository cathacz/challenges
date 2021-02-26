console.log("===== Challenge No 1 ====="); // Fibonacci-Folge
// http://salzburgfoundation.at/walk-of-modern-art/mario-merz-2003/
// "Ziffern im Wald"
// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1.597, 2.584, 4.181, 6.765,10.946.
const fibonacci = function () {
  let result = [1, 1];
  let a = 1;
  let b = 1;
  for (let i = 0; i < 10946; i++) {
    b = a;
    a = result[i - 1] + result[i];
    result.push(a);
  }
  return result;
};
console.log(fibonacci());

console.log("===== Challenge No 2 ====="); // Game of Thrones
// Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.
// The words and, the, of and in should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.

const correctTitle = (str) => {
  let result = [];
  let firstLetter;
  let arr = str.toLowerCase().split(" ");

  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "and" ||
      arr[i] == "the" ||
      arr[i] == "of" ||
      arr[i] == "in"
    ) {
      result.push(arr[i]);
    } else {
      firstLetter = arr[i][0].toUpperCase();
      result.push(firstLetter + arr[i].substring(1));
    }
  }
  return result.join(" ");
};
// Examples
console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));
// ➞ "Jon Snow, King in the North."
console.log(correctTitle("sansa stark, lady of winterfell."));
// ➞ "Sansa Stark, Lady of Winterfell."
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));
// ➞ "Tyrion Lannister, Hand of the Queen."

console.log("===== Challenge No 3 ====="); // Balanced Words
// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.
const alphaBeta = [];
const balanced = function (str) {
  let result;
};

// Examples
// balanced("zips") ➞ true
// // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

// balanced("brake") ➞ false
// // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
// Notes
// All words will be lowercase, and have a minimum of 2 characters.
// Palindromic words will always be balanced.

console.log(balanced("brake")); // false
console.log(balanced("zips")); // true

console.log("===== Challenge No 4 ====="); // Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
const sevenBoom = (arr) => {
  return arr.join("").includes(7) ? `Boom!` : `there is no 7 in the array`;
};
//Examples
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // ➞ "Boom!"
// 7 contains the number seven.
console.log(sevenBoom([8, 6, 33, 100])); // ➞ "there is no 7 in the array"
// None of the items contain 7 within them.
console.log(sevenBoom([2, 55, 60, 97, 86])); // ➞ "Boom!"
// 97 contains the number seven.

console.log("===== Challenge No 5 ====="); // How Many Days Between Two Dates
// Create a function that takes two dates and returns the number of days between the first and second date.
const getDays = () => {
  return;
};
// Examples
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))); // ➞ 6

console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
); // ➞ 3
// // Dates may not all be in the same month/year.

console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019"))); // ➞ 10

console.log("===== Challenge No 5 ====="); // Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
const oddishOrEvenish = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur) %
    2 ==
    0
    ? "Evenish"
    : "Oddish";
};
// Examples
console.log(oddishOrEvenish(43)); // ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)); // ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)); // ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

console.log("===== Challenge No 5 ====="); // C*ns*r*d Str*ngs
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

const uncensor = (str, vowels) => {
  let result = [];
  let index = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if ((index = arr.map((x) => x == "*"))) {
      result.push((arr[index.indexOf(true)] = vowels.split("").shift()));
    }
  }
  return result;
};
// Example
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // ➞ "Where did my vowels go?"
console.log(uncensor("abcd", "")); //  ➞ "abcd"
console.log(uncensor("*PP*RC*S*", "UEAE")); //  ➞ "UPPERCASE"
