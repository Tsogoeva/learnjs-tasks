let view = document.querySelector('#view');

view.addEventListener('click', focusHandler);

function focusHandler() {
	let field = document.createElement('textarea');
	field.className = 'edit';
	field.value = view.innerHTML;

	field.onkeydown = function (e) {
		if (e.key === 'Enter') field.blur();
	}

	field.onblur = function () {
		view.innerHTML = field.value;
		field.replaceWith(view);
	}

	view.replaceWith(field);
	field.focus();
}
