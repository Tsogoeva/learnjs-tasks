function fib(n) {
	let array = [1, 1];
	let step = 1;

	while (array.length < n) {
		array.push(array[step - 1] + array[step]);
		step++;
	}
	return array.at(-1);
}


//


function fib(n) {
	let num1 = 1;
	let num2 = 1;
	let num3;

	for (let i = 3; i <= n; i++) {
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	}

	return num2;
}
