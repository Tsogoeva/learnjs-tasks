function inBetween(a, b) {
	return (c) => c >= a && c <= b;
}

function inArray(arr) {
	return (x) => arr.includes(x);
}
