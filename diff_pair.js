// Given a sorted array A of size n and a number k, return the number of unique pairs which have a difference of k.


const diffPairs = (arr, n) =>{
    let res = []; //to store all results
    let k = 2;
    
    for (var i=0; i<arr.length; i++) {
        for (var j=i+1; j<arr.length; j++) {
            if (arr[i] - arr[j] === k) {
                res.push([arr[i],arr[j]]);
            }
    }
}
    return res;
}

var arr = [ 1,5,6,-12,3,-4,4];
var n = arr.length;

console.log(diffPairs(arr, n));