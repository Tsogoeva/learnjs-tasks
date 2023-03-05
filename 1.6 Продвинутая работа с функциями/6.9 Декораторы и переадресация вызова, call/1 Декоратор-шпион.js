function spy(func) {

	function wrapper(...arguments) {
		wrapper.calls.push(arguments);
		return func.apply(this, arguments);
	}
	wrapper.calls = [];
	return wrapper;
}
