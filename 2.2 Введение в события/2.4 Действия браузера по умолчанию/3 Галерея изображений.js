thumbs.addEventListener('click', (event) => {
	event.preventDefault();

	let link = event.target.closest('a');

	let largeImg = document.querySelector('#largeImg');
	largeImg.setAttribute('src', link.getAttribute('href'));
	largeImg.setAttribute('alt', link.getAttribute('title'));
})
