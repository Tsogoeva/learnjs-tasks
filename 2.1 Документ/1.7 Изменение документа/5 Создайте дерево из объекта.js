let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};

function createTree(container, data) {
	let ul = document.createElement('ul');

	for (let [key, value] in Object.entries(data)) {
		let li = document.createElement('li');
		li.textContent = key;
		container.append('ul');
		ul.append('li');
		createTree(li, value);
	}
}