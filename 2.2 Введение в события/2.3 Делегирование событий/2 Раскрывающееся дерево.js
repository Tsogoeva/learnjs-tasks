tree.addEventListener('click', (event) => {
	let title = event.target;
	let list = title.querySelector('ul');

	if (list) {
		list.hidden = !list.hidden;
	}
})