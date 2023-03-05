function sum(a) {
	let current = a;

	function func(b) {
		current += b;
		return func;
	}

	func.valueOf = function () {
		return current;
	};

	return func;
}
