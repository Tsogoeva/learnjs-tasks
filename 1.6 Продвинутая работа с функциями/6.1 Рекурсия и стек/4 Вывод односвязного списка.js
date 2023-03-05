// Через цикл
function printList(list) {
	let path = list;

	do {
		alert(path.value);
		path = path.next;
	} while (path)
}

// Через рекурсию
function printList(list) {
	if (list) {
		alert(list.value);
		printList(list.next);
	}
}
