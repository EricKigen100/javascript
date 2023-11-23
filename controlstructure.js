//Sequence, conditional statements(if else.., switch case),looping/iteration(for loop,while loop, for item in array)

// Example--- Grading system

let mark=100
if(mark>100||mark<1){
    console.log("invalid mark");
}else if(mark>79){
    console.log("Grade: A");
}else if(mark>69){
    console.log("Grade: B");
}else if(mark>59){
    console.log("Grade: c");
}else if(mark>49){
    console.log("Grade: D");
}else{
    //if none of all the above conditions is met, this block is executed
    console.log("Grade: Fail");
}

//task: convert the above to a switch case statement

//FOOR LOOPS
for(let counterValue = 90; 
    counterValue<100; 
    counterValue=counterValue+2){
    console.log("This code will be executed again and again untill the condition(counterValue<100) is not met i.e returns false");
    console.log(counterValue);
    //some action code
}

let numbers = [23,4545,65,4,5,35,47]
for(x in numbers){
    console.log(number[x]);
    console.log(number [x]**2);
}