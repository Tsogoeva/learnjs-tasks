Function.prototype.defer = function (ms) {
	let func = this;

	return function (...arguments) {
		setTimeout(() => func.apply(this, arguments), ms);
	}
}
