// Given a sorted array, check if there exist two numbers whose sum is zero.

const findNums = (arr) =>{
    let res = []; //store all the results
    let sortedArray = arr.sort().slice();

    for(let i=0; i<sortedArray.length; i++){
        for(let j=i; j<sortedArray.length; j++){
            if(arr[i] + arr[j] === 0){
                res.push(arr[i], arr[j]);
            }
        }
    }
    return res;
}

let arr = [2,4,1,5,-4];

console.log(findNums(arr));