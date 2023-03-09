contents.addEventListener('click', (event) => {
	let { target } = event;

	if (target.tagName === 'A' || target.tagName === 'I') {
		target = target.closest('a');
		event.preventDefault();
		let answer = confirm(`Вы точно хотите перейти на сайт ${target.textContent}?`);

		if (answer) {
			return location.href = target.getAttribute('href');
		}
	}
})
