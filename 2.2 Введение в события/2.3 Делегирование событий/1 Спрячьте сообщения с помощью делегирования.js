container.addEventListener('click', (event) => {
	let removeButton = event.target;

	if (removeButton.className === 'remove-button') {
		removeButton.closest('.pane').remove();
	}
})