/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
  //Create an object with keys as numeric numbers and values as the corresponding strings
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  }
  //Create a variable called result set equal to empty string
  var result = '';

  //Declare a recursive helper function that takes in a string as a parameter
  var createNewString = function(string) {
    //Base case: If string.length = 0
    if (string.length === 0) {
      //return result
      return result;
    } else {
      //declare a variable called currentChar and make that equal to string.charAt(0)
      var currentChar = string.charAt(0);

      console.log(string, currentChar);
      //check if first character of the string is a key in object
      if (numbers.hasOwnProperty(currentChar)) {
        //add the value of number property to result
        result += numbers[currentChar]; // result = result.concat(numbers[curentChar]);
      } else {
        //else add the original character to result
        result += currentChar; // result = result.concat(currentChar)
      }
      //return recursive call with sliced string as parameter
      return createNewString(string.slice(1));
    }
  }
  //call recursive helper function with str as the input
  createNewString(str);

  //return result
  return result;
};

console.log(numToText("I have 5 dogs and 6 ponies"));
