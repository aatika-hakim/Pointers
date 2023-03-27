// // Given a string str find the number of vowels in every substring of size n.


// Function to check whether a character is vowel or not
const isVowel = (x) => {
	return (x == 'a' || x == 'e' || x == 'i' ||x == 'o'||
		x == 'u' || x == 'A' || x == 'E'|| x == 'I'||
		x == 'O' || x == 'U');
	}

// Function to find the count of n-sized substring having vowels
const countSubStr = (str, n) => {

	// Stores the number of vowels
	var vowel = 0;
	for (let i = 0; i < n; i++){
		if (isVowel(str[i]))
			vowel++;
	}
	return vowel;
}
let str = "dsalearning";
let n = str.length;

console.log(countSubStr(str , n));
