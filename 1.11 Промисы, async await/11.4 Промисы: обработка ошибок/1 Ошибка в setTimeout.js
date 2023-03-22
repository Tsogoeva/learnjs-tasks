new Promise(function (resolve, reject) {
	setTimeout(() => {
		throw new Error("Whoops!");
	}, 1000);
}).catch(alert);

// Catch не выполнится, поскольку ошибка
// генерируется не по ходу выполнения кода.
