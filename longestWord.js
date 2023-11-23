//Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task.

let statement = "Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), and length to accomplish this task.";
/* console.log(statement);
console.log(statement(".",""));
console.log(statement(",",""));
 */
function getLongestWord(sentence){
    let modifiedSentence= sentence.replaceAll(".","");
    modifiedSentence.modifiedSentence.replaceAll(",","");
    let wordsArray = sentence.split(" ");
    let longestword= ""
    for (let index = 0; index< wordsArray.length; index++){
        if(wordsArray[index].length> longestword.length){
            longestword=wordsArray[index]
        }
        //console.log(longestword);
    }

    console.log(wordsArray);
}

getLongestWord(statement);