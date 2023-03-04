// С использованием цикла
function sumTo(n) {
	let result = 0;

	for (let i = n; i > 0; i--) {
		result += i;
	}

	return result;
}


// Через рекурсию
function sumTo(n) {
	return (n === 1) ? n : n + sumTo(n - 1);
}


// С использованием формулы арифметической прогрессии
function sumTo(n) {
	return n * (n + 1) / 2;
}