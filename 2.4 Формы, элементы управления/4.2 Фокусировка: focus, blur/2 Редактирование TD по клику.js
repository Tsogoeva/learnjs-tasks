let table = document.getElementById('bagua-table');

let editingTd;

table.addEventListener('click', (event) => {
	let target = event.target.closest('.cancel,.ok,td');

	if (!table.contains(target)) return;

	if (target.className == 'cancel') {
		finishEdit(editingTd.elem, false);
	} else if (target.className == 'ok') {
		finishEdit(editingTd.elem, true);
	} else if (target.nodeName == 'TD') {
		if (editingTd) return;

		makeTdEditable(target);
	}
})


function makeTdEditable(td) {
	editingTd = {
		elem: td,
		data: td.innerHTML
	};

	td.classList.add('edit-td');

	let area = document.createElement('textarea');
	area.style.width = td.clientWidth + 'px';
	area.style.height = td.clientHeight + 'px';
	area.className = 'edit-area';

	area.value = td.innerHTML;
	td.innerHTML = '';
	td.append(area);
	area.focus();

	td.insertAdjacentHTML("beforeEnd",
		'<div class="edit-controls"><button class="ok">OK</button><button class="cancel">CANCEL</button></div>'
	);
}

function finishEdit(td, isOk) {
	if (isOk) {
		td.innerHTML = td.firstChild.value;
	} else {
		td.innerHTML = editingTd.data;
	}
	td.classList.remove('edit-td');
	editingTd = null;
}
