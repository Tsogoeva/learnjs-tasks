// setInterval
function printNumbers(from, to) {
	let i = from;

	let timer = setInterval(() => {
		if (i === to) {
			clearInterval(timer);
		}

		alert(i);
		i++
	}, 1000);
}


// setTimeout

function printNumbers(from, to) {
	let i = from;

	setTimeout(function show() {
		if (i < to) {
			setTimeout(show, 1000);
		}

		alert(i);
		i++
	}, 1000);
}
