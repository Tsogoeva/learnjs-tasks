dictionary.toString = function () {
	return Object.keys(this).join(', ');
}

Object.defineProperties(dictionary, 'toString', {
	enumerable: false,
});
