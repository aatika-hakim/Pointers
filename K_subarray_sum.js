// Given an array and a number k, find the sum of all the subarrays of size k.

const findNums = (arr,sum) =>{
    let res = []; //store all the results

    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] + arr[j] === sum){
                res.push(arr[i], arr[j]);
            }
        }
    }
    return [res];
}

let arr = [2,4,8,15,-4,25,6,9,21];

console.log(findNums(arr,23));