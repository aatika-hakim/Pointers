// Given an array where each element denotes a the height of blocks, calculate the total volume of water that can be trapped when it rains.


const trap = (height) => {
    const Left = new Array(n).fill(0);
    const  Right = new Array(n).fill(0);
    
    //for left pointer
    var max = 0;
    for (let i=0; i<n; i++) {
        max = Math.max(height[i], max)
        Left[i] = max;
    }
    //for right pointer
    for (let i=n-1; i>-1; i--) {
        max = Math.max(height[i], max);
        Right[i] = max;
    }
    //for total volume of water that can be trapped when it rains.
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        const boundary = Math.min(Left[i], Right[i])
        trappedWater += boundary - height[i]
    }
    return trappedWater;
}

let height = [9,5,3,0,2,5];
let n = height.length;

console.log(trap(height, n))