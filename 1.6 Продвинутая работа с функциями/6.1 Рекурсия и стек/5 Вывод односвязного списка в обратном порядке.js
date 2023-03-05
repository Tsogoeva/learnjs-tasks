// Через цикл
function printReverseList(list) {
	let path = list;
	let storage = [];

	while (path) {
		storage.unshift(path.value);
		path = path.next;
	}

	storage.forEach(value => alert(value));
}

// Через рекурсию
function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next);
	}

	alert(list.value);
}
