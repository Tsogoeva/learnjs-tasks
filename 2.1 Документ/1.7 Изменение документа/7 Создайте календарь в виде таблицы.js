function createCalendar(elem, year, month) {
	let thead = '<tr>';

	thead += '<th>Пн</th>';
	thead += '<th>Вт</th>';
	thead += '<th>Ср</th>';
	thead += '<th>Чт</th>';
	thead += '<th>Пт</th>';
	thead += '<th>Сб</th>';
	thead += '<th>Вс</th>';

	thead += '</tr>';

	tbody = '';

	let days = new Date(year, month - 1, 0).getDate();

	let firstWeek = new Date(year, month - 1, 1).getDay();
	let day = 1;

	if (firstWeek === 0) {
		firstWeek = 7;
	} else {
		firstWeek -= 1;
	}

	for (let i = 1; i < 7; i++) {
		tbody += '<tr>';

		for (let j = 0; j < 7; j++) {
			if ((i === 1 && j >= firstWeek) || (i !== 1 && day <= days)) {
				tbody += '<td>' + day + '</td>';
				day++

			} else {
				tbody += '<td></td>';
			}
		}

		tbody += '</tr>';
	}

	let table = document.createElement('table');
	table.innerHTML = thead + tbody;

	elem.append(table);
}
