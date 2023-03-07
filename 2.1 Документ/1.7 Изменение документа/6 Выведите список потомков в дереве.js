let liList = document.querySelectorAll('li');

for (let li of liList) {
	let count = li.querySelectorAll('li').length;

	if (count) {
		li.firstChild.data += ' [' + count + ']';
	}
}
