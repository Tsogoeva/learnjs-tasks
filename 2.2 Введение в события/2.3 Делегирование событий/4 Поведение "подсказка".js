document.addEventListener('mouseover', (event) => {
	let { target } = event;

	if (target.dataset.tooltip) {
		let span = document.createElement('span');
		span.className = 'tooltip';
		span.textContent = target.dataset.tooltip;
		target.before(span);

		let coords = target.getBoundingClientRect();

		let left = coords.left + (target.offsetWidth - span.offsetWidth) / 2;

		if (left < 0) {
			left = 0;
		}

		let top = coords.top - span.offsetHeight - 5;

		if (top < 0) {
			top = coords.top + target.offsetHeight + 5;
		}

		span.style.left = left + 'px';
		span.style.top = top + 'px';
	}
})

document.addEventListener('mouseout', (event) => {
	let { target } = event;

	if (target.dataset.tooltip) {
		document.querySelector('span').remove();
	}
})