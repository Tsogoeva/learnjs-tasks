grid.addEventListener('click', (event) => {
	let { target } = event;

	if (target.dataset.type === 'number') {
		let sorted = Array.from(grid.rows).slice(1).sort((a, b) => a.cells[0].innerHTML - b.cells[0].innerHTML);

		grid.tBodies[0].append(...sorted);
	}
	if (target.dataset.type === 'string') {
		let sorted = Array.from(grid.rows).slice(1).sort((a, b) => a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1);

		grid.tBodies[0].append(...sorted);
	}
})