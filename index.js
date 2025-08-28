// A SMART WAY TO LEARN JAVASCRIPT
// chapter 11 "Comparison operators"

// Here are 4 more comparison operators, usually used to compare numbers.
// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to
// In the examples below, all the conditions are true.
if (1 > 0) {
}
if (0 < 1) {
}
if (1 >= 0) {
}
if (1 >= 1) {
}
if (0 <= 1) {
}
if (1 <= 1) {
}
// You can also compare strings. Strings are compared letter by letter in alphabetical order.
if ("apple" < "banana") {
}
if ("apple" > "Apple") {
}
if ("2" > "12") {
}

// Note that uppercase letters are "less than" lowercase letters.
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// CHAPTER 12 "if...else and else if statements"///////////////////////////////////

// The if statements you've coded so far have been all-or-nothing. If the condition tested
// true, something happened. If the condition tested false, nothing happened.

// let we learn if...else and else if statements by prompt
prompt("Enter a number:");

if (number > 10) {
  console.log("The number is greater than 10.");
} else if (number === 10) {
  console.log("The number is equal to 10.");
} else {
  console.log("The number is less than 10.");
}
// In this example, if the user enters a number greater than 10, the first block of code runs.
// If the user enters exactly 10, the second block of code runs.
// If the user enters a number less than 10, the last block of code runs.
// You can have as many else if blocks as you want, but only one else block.
// The else block is optional. If you leave it out and none of the conditions are true, nothing happens.
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// CHAPTER 13 "Testing sets of conditions"///////////////////////////////////
// You can test multiple conditions in a single if statement using logical operators.
// The logical AND operator (&&) tests whether both conditions are true.
if (number > 10 && number < 20) {
  console.log("The number is between 10 and 20.");
}
// In this example, the message is logged only if the number is greater than 10 and less than 20.
// The logical OR operator (||) tests whether at least one of the conditions is true.
if (number < 10 || number > 20) {
  console.log("The number is less than 10 or greater than 20.");
}
// In this example, the message is logged if the number is less than 10 or greater than 20.
// You can combine multiple logical operators in a single if statement.
if ((number > 10 && number < 20) || number === 25) {
  console.log("The number is between 10 and 20, or it is 25.");
}
// In this example, the message is logged if the number is between 10 and 20, or if it is exactly 25.
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// CHAPTER 14 "if statements nested"///////////////////////////////////
// You can nest if statements inside other if statements to test multiple conditions in a hierarchical way.
if (number > 10) {
  if (number < 20) {
    console.log("The number is between 10 and 20.");
  } else {
    console.log("The number is greater than or equal to 20.");
  }
}
// In this example, the outer if statement tests whether the number is greater than 10.
// If it is, the inner if statement tests whether the number is less than 20.
// If both conditions are true, the first message is logged.
// If the number is greater than or equal to 20, the second message is logged.
// If the number is less than or equal to 10, nothing happens.
if (number <= 10) {
  console.log("The number is less than or equal to 10.");
}
// In this example, if the number is less than or equal to 10, the message is logged.
// You can nest as many if statements as you want, but be careful not to make your code too complex and hard to read.
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// CHAPTER 15 " Arrays"///////////////////////////////////
// An array is a special variable, which can hold more than one value at a time.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
// In this example, we create an array called fruits that contains three strings: "apple", "banana", and "cherry".
// We can access the elements of the array using their index, which starts at 0.

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
// We can also change the elements of the array by assigning new values to their indexes.
fruits[0] = "orange";
fruits[1] = "grape";
fruits[2] = "kiwi";
console.log(fruits);
console.log(fruits.length); // 3
// We can use the length property to get the number of elements in the array.
console.log(fruits.length); // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////CHAPTER 16 "Arrays: adding and removing elements////////////////
// You can add elements to an array using the push() method, which adds an element to the end of the array."
fruits.push("mango");
console.log(fruits);
// You can remove the last element of an array using the pop() method, which removes and returns the last element of the array.
fruits.pop();
console.log(fruits);
// You can add elements to the beginning of an array using the unshift() method, which adds an element to the start of the array.
fruits.unshift("strawberry");
console.log(fruits);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 17 " Arrays: removing, inserting, and extracting elements////////////////
fruits.splice(1, 1);
console.log(fruits);
// In this example, we use the splice() method to remove one element at index 1 (the second element) from the fruits array.
fruits.splice(1, 0, "blueberry");
console.log(fruits);
// In this example, we use the splice() method to insert one element ("blueberry") at index 1 (the second position) in the fruits array.
let citrus = fruits.slice(1, 3);
console.log(citrus);
// In this example, we use the slice() method to extract a portion of the fruits array from index 1 (inclusive) to index 3 (exclusive) and store it in a new array called citrus.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////CHAPTER 18 "FOR LOOPS"///////////////////////////////////////////
// A for loop is a control flow statement that allows you to iterate over a sequence (such as an array) and execute a block of code multiple times.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// In this example, we use a for loop to iterate over the fruits array and log each element to the console.
// The loop starts with i = 0, and continues as long as i is less than the length of the array (fruits.length).
// After each iteration, i is incremented by 1 (i++).
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 19 "for loops: flags, Booleans, array length, and breaks"///////////////////////////////////////////
// In this chapter, we will explore more advanced concepts related to for loops, including the use of flags, Booleans, and the break statement.
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "banana") {
    found = true;
    break;
  }
}
console.log(found);
// In this example, we use a flag variable (found) to indicate whether we have found a specific element ("banana") in the fruits array.
// The loop iterates over the array, and if it finds the element, it sets the flag to true and breaks out of the loop.
// If the loop completes without finding the element, the flag remains false.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CHAPTER 20 "for loops nested"///////////////////////////////////////////
for (let i = 0; i < fruits.length; i++) {
  for (let j = 0; j < fruits.length; j++) {
    console.log(`i: ${i}, j: ${j}, fruits[i]: ${fruits[i]}, fruits[j]: ${fruits[j]}`);
  }
}
// In this example, we use nested for loops to iterate over the fruits array.
// The outer loop iterates over the array using the index i, and for each iteration of the outer loop, the inner loop iterates over the array using the index j.
// This allows us to compare each element of the array with every other element.

////////////////////////////MUNTAZIR MEHDI  ///////////////////////////