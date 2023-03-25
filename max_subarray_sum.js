// Given an array find the sum of the subarray.

const maxSubArrSum = (arr) => {
    let maxSum = 0;
    let currentSum = 0;

    // iterate through the arr
    for(let i=0; i<n; i++){ 
        
        // store the maximum value
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        // store the greater value
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

let arr= [4,6,2,9,-2,5,7];
let n = arr.length;

console.log(maxSubArrSum(arr,n));