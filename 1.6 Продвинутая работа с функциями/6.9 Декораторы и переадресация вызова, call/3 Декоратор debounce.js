function debounce(f, ms) {
	let time;

	return function (...arguments) {
		if ((Date.now() - time) < ms) {
			return;
		}

		f.apply(this, arguments);
		time = Date.now();
	};
}
