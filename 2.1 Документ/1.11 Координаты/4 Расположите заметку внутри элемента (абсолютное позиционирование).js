function positionAt(anchor, position, elem) {
	let coordsOfAnchor = anchor.getBoundingClientRect();

	if (position === 'top-out') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset - elem.offsetHeight + 'px';
	}
	if (position === 'right-out') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + anchor.offsetWidth + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + 'px';
	}
	if (position === 'bottom-out') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + anchor.offsetHeight + 'px';
	}
	if (position === 'top-in') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + 'px';
	}
	if (position === 'right-in') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + anchor.offsetWidth - elem.offsetWidth + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + 'px';
	}
	if (position === 'bottom-in') {
		elem.style.left = coordsOfAnchor.left + window.pageXOffset + 'px';
		elem.style.top = coordsOfAnchor.top + window.pageYOffset + anchor.offsetHeight - elem.offsetHeight + 'px';
	}
}
