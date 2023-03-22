// Given 2 sorted arrays, return the intersection of both the arrays. The intersection of 2 arrays means all the elements which are present in both.

let arr1 = [1,4,7,3];
let arr2 = [2,4,7,3,8];

let arr3 = arr1.filter(nums => arr2.includes(nums));

let sortedArr = arr3.sort();

console.log(sortedArr);