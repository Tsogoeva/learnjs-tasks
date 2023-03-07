let liList = document.querySelectorAll('li');

for (let li of liList) {
	alert(`${li.firstChild.data}: ${li.querySelectorAll('li').length}`)
}
