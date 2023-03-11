// 1

let selected = Array.from(genres.options)
	.filter(option => option.selected)
	.forEach(option => alert(option.selected, option.value));

// 2

let option = new Option("Классика", "classic");
genres.append(option);

// 3

option.selected = true;
