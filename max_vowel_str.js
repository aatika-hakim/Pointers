// Given a string s and a number k, find the maximum number of vowels in any substring of size k.


const maxVowel = (str = '') => {
    let current = 0
    let max = 0
    for (let i = 0; i < k; ++i) {
        if ("aeiou".includes(str[i])) {
        current++;
        if (current > max) {
            max = current;
        }
    } else {
        current = 0;
        }
    }
    return max;
}
let str = 'schooeal';
let k = 6;

console.log(maxVowel(str));