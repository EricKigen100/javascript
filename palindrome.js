//A palindrome is a word or sentence that's spelled the same way both foward and backwards, ignoring punctuation, case, and spacing

//NOTE: We need to remove all non-alphanumeric characters(Punctuation, spaces and Symbols)

//Examples for Palindrome is racecar
//palindrome test case
        //palindrome("racecar") should return true
        //palindrome("not a palindrome") should return false
        //palindrome("never odd or even")retuns true

//Code for that 


 function palindrome(str){
    return true;
 }
 palindrome("eye");

 //we need to pass Regular Expression this is when the search for a match requires something more than a direct match, the pattern include space character

 //we use two Regular Expression /[^A-Za-z0-9]/g  or /[\W_]/g

 //Palindrome with Built-In Functions toLowerCase()--method to return the calling string value converted to lowercase.
 
 // The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.

 //The split() method splits a String object into an array of strings by separating the string into sub strings.

 //The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

 //The join() method joins all elements of an array into a string.

 //code examples

 function palindrome(str){
    //Step 1, Lower case the string and use the RegExp to remove unwanted character 
    var re = /[^A-Za-z0-9]/g;  //or we use var re = /[\W_]/g;

 var lowerRegStr = strtoLowerCase().replace(re, '');
 //str.toLowerCase() ="a man,a plan, a canal. panama" .toLowerCase()= "a man, a plan, a canal.panama"
 // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}
 
palindrome("A man, a plan, a canal. Panama");

//without comments 
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama"); //amanaplanacanalpanama

  console.log(palindrome("HEllO"));
  console.log(palindrome("EyE"));
