function positionAt(anchor, position, elem) {
	let coordsOfAnchor = anchor.getBoundingClientRect();

	if (position === 'top') {
		elem.style.left = coordsOfAnchor.left + 'px';
		elem.style.top = coordsOfAnchor.top - elem.clientHeight + 'px';
	}
	if (position === 'right') {
		elem.style.left = anchor.clientWidth + coordsOfAnchor.left + 'px';
		elem.style.top = coordsOfAnchor.top + 'px';
	}
	if (position === 'bottom') {
		elem.style.left = coordsOfAnchor.left + 'px';
		elem.style.top = anchor.clientHeight + coordsOfAnchor.top + 'px';
	}
}
