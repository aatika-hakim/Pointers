// Given an array and a number k, remove all occurrences of k from the array (in-place). Return the number of elements 'remainingSize' left after removing k. Note that removing the occurences is mandatory and will be checked in the main method. There can be anything beyond the first 'remainingSize' elements. It will be ignored.

const removeOccurrance = (arr,n) =>{
    let res = []; //store all the results

    for(let i=0; i<n; i++){
        for(let j=i+1; j<i; j++){
            if(arr[i] - arr[j] === 0){
                res.push(arr[i],arr[j]);
            }
        }
    }
    return res;
}

let arr = [2,4,3,7,0,17,4,1,5,-4];
let n = arr.length;

console.log(removeOccurrance(arr,n));