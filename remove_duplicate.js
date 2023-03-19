// Given an array and a number k, remove all occurrences of k from the array.

const removeDuplicate = (arr) =>{
    let res = []; //store all the results
    let sortedArray = arr.sort().slice();

    for(let i=0; i<sortedArray.length-1; i++){
        if(sortedArray[i+1] === sortedArray[i]){
                res.push(sortedArray[i].s);
                }
            }
    return res;
}

let arr = [2,4,3,7,0,4,1,5,-4];

console.log(removeDuplicate(arr));