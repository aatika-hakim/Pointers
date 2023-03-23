// Given an array and a number k, find the sum of the subarray.

const maxSubSum = (arr) => {
    let maxSum = 0;
    let prefixSum = 0;

    for (let element of arr) { // for each element of arr
         // add it to prefixSum
        prefixSum += element;
        maxSum = Math.max(maxSum, prefixSum); 
        // zero if negative
    if (prefixSum < 0) 
        {
        prefixSum = 0;
        } 
    }
    return maxSum;
}
console.log(maxSubSum([2,3,6,9,3,-1,5,8]));