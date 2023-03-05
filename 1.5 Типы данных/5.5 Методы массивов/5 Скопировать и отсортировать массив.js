function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b));
}
