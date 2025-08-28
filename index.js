// chapter 1 to 10 
//chapter 1 "ALERTS"
// An alert is a box that pops up to give the user a message. Here's code for an alert that
// displays the message "Thanks for your input!"


alert("Thanks for your input!");

// chapter 2 "Variables for Strings"
// Declare a variable called thanx and assign it the value "Thanks for your input!".

var thanx = "Thanks for your input!"
alert(thanx);

// chapter 3 "Variables for Numbers"
// Declare a variable called originalNum and assign it the value 23.
var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;


// chapter 4 "Variable Names: Legal and Illegal"

// Which of the following are legal variable names? If a name is not legal, explain why.
// 1. 2beOrNot2be - not legal because it starts with a number
// 2. _2beOrNot2be - legal
// 3. var - not legal because it's a reserved word
// 4. first_and_last - legal
// 5. if - not legal because it's a reserved word
// 6. person2 - legal
// 7. thisIsAVariable - legal
// 8. $$$ - legal
// 9. user@name - not legal because it contains a special character (@)
// 10. hello.2 - not legal because it contains a special character (.)
// 11. name - legal


// chapter 5 "Math expressions:Familiar operators"

// Wherever you can use a number, you can use a math expression.
var num = 10;
var anotherNum = 1; 
var popularNumber = num + anotherNum;

// chapter 6 "Math expressions: Unfamiliar operators"

// There are several specialized math expressions you need to know. Here's the first one.
num++;
// This is a short way of writing...
num = num + 1;
// It increments the variable by 1.
// You decrement using minuses instead of pluses.
// {
//     n-- is also work ass same way with derrement.
// }

// The % (modulus) operator returns the integer remainder of dividing the first number by the second.
var num = 10;
var anotherNum = 3;
var popularNumber = num % anotherNum; // popularNumber is 1 because 10 divided by 3 leaves a remainder of 1


// chapter 7 " Math expressions:Eliminating ambiguity"

// 