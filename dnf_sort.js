// Sort an array where each of the elements belong to the set: {0, 1, 2}. By Dutch National Flag sort
// dutch national flag has 3 colors
// 0 red, 1 white, 2 blue

const dnfSort = (arr,n) => {

    let min = 0;
    let max = n - 1;
    let mid = 0;
    let temp = 0;

    while (mid <= max){
        // If the element is 0
        if(arr[mid] == 0){
            temp = arr[min];
            arr[min] = arr[mid];
            arr[mid] = temp;
            min++;
            mid++;
        }
        // If the element is 1
        else if(arr[mid] == 1)
        {
            mid++;
        }
        // If the element is 2
        else
        {
            temp = arr[mid];
            arr[mid] = arr[max];
            arr[max] = temp;
            max--;
        }
    }
}

const printArray = (arr,n) => {
    let i;
    for (i = 0; i < n; i++){
        console.log(arr[i]);
    }
}

let arr= [0, 1, 1, 2, 0, 1, 2];
let n = arr.length;

dnfSort(arr, n);
printArray(arr, n);


