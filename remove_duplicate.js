function removeDuplicates(arr , n) {
    if (n == 0 || n == 1)
        return n;

    // To store index of next unique element
    var j = 0;

    for (i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            arr[j++] = arr[i];

    arr[j++] = arr[n - 1];

    return j;
}

  
    var arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
    var n = arr.length;

    n = removeDuplicates(arr, n);

    // Print updated array
    for (i = 0; i < n; i++)
        console.log(arr[i] + " ");
