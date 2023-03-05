function throttle(func, ms) {
	let throttled = false;
	let savedArgs = null;
	let savedThis = null;

	function wrapper() {
		if (throttled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments);
		throttled = true;

		setTimeout(function () {
			throttled = false;

			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = null;
				savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}