// Given an array A, find all unique triplets in the array whose sum is equal to zero.

const threeSum = (arr, n) =>{
    let res = []; //to store all results

    for (var i=0; i<arr.length; i++) {
        for (var j=i+1; j<arr.length; j++) {
            for (var k=j+1; k<arr.length; k++) {
              if (arr[i]+arr[j]+arr[k] === 0) {
                    res.push([arr[i],arr[j],arr[k]]);
                    res[res.length-1].sort();
            }
        }
    }
}
    return res;
}

var arr = [ 1,5,-5,-5,6,-12,3,-4,4];
var n = arr.length;

console.log(threeSum(arr, n));