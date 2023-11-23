//Given an array of numbers, write a function that calculates the average of the numbers
//[2,4,2,4,4,4] -- 3.33

function averageNumbers(arr){
    let total = 0;
    for(let index=0; index<arr.length; index++){
        console.log(total);
        total=total=arr[index];
    }
    return total/arr.length;
}

const result = averageNumbers([2,4,2,4,4,4]);
console.log(result);

console.log(averageNumbers([34,54,44,84,60,21]));

//hof-- callback function