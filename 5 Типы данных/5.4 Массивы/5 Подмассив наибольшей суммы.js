function getMaxSubSum(arr) {  // O(n2)
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let start = 0;

        for (let j = i; j < arr.length; j++) {
            start += arr[j];
            maxSum = Math.max(maxSum, start);
        }
    }
    return maxSum;
}
