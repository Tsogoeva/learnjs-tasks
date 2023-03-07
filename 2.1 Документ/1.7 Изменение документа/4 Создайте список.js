let ul = document.createElement('ul');

let content = prompt('Запишите пункт', '');

while (content !== null || content !== '') {
	let li = document.createElement('li');
	li.textContent = content;
	ul.append(li);
}