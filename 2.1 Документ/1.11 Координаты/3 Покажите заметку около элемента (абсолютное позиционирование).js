function positionAt(anchor, position, elem) {
	let coordsOfAnchor = anchor.getBoundingClientRect();

	if (position === 'top') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset - elem.offsetHeight + 'px';
	}
	if (position === 'right') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + anchor.offsetWidth + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + 'px';
	}
	if (position === 'bottom') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + anchor.offsetHeight + 'px';
	}
}
