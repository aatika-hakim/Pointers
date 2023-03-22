// Given two sorted arrays A and B, and another value k, print the kth element of the resultant sorted array.

const  kthElement = (arr1 , arr2 , m , n , k) =>{
    let sortedArr = Array(m + n).fill(0);

		let i = 0, j = 0, index = 0;
		while (i < m && j < n) {
			if (arr1[i] < arr2[j])
				sortedArr[index++] = arr1[i++];
			else
				sortedArr[index++] = arr2[j++];
		}
		while (i < m)
			sortedArr[index++] = arr1[i++];
		while (j < n)
			sortedArr[index++] = arr2[j++];
		return sortedArr[k - 1];
	}

let arr1 = [2,1,4,6,4,3];
let arr2 = [1,2,6,8,0,-4];
let k = 5;

console.log(kthElement(arr1, arr2, 5, 4, k));


