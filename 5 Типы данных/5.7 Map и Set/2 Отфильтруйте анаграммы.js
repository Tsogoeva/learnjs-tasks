function aclean(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join('');
        result[sorted] = arr[i];
    }

    return Object.values(result);
}
