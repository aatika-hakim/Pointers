 let removeOccurences = (arr,n) => {
	let j = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i] != n) {
			arr[j++] = arr[i];
		}
	}
	return j;
}
let arr = [1,2,3,5,5,7,6,7,6];
let n = arr.length;

console.log(removeOccurences(arr,n))