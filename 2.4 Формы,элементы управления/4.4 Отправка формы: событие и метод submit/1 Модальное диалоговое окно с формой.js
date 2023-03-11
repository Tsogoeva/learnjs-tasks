const container = document.querySelector('#prompt-form-container');
const form = document.querySelector('#prompt-form');
const message = document.querySelector('#prompt-message');
const buttonShow = document.querySelector('#show-button');

container.style.visibility = 'hidden';

buttonShow.onclick = function () {
	container.style.visibility = 'visible';
	showPrompt("Введите что-нибудь...умное :)", function (value) {
		alert(value);
	});
}

function showPrompt(html, callback) {
	document.body.style.overflow = 'hidden';
	container.style.display = 'block';
	container.style.backgroundColor = 'rgba(0, 0, 0, .3)';
	message.innerHTML = html;
	form.text.focus();

	form.addEventListener('click', clickHandler);
	document.addEventListener('keydown', keyDownHandler);

	function clickHandler(event) {
		event.preventDefault();
		const { target } = event;

		const buttonOk = form.querySelector('[type="submit"]');
		const text = form.text.value;

		if (text && target === buttonOk) {
			callback(`Вы ввели: ${text}`);
			hidePrompt();
		}

		if (target === form.cancel) {
			callback(`Вы ввели: ${null}`);
			hidePrompt();
		}
	}

	function keyDownHandler(event) {
		if (event.code === 'Escape') {
			callback(`Вы ввели: ${null}`);
			hidePrompt();
		}
	}

	const firstElem = form.elements[0];
	const lastElem = form.elements[form.elements.length - 1];

	lastElem.addEventListener('keydown', tabHandler);

	function tabHandler(event) {
		if (event.code === 'Tab' && !event.shiftKey) {
			event.preventDefault();
			firstElem.focus();
		}
	}

	function hidePrompt() {
		container.style.display = 'none';
		document.body.style.overflow = 'auto';
		form.text.value = '';

		form.removeEventListener('click', clickHandler);
		document.removeEventListener('keydown', keyDownHandler);
		lastElem.removeEventListener('keydown', tabHandler);
	}
}
