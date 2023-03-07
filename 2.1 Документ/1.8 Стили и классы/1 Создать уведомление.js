function showNotification({ top = 0, right = 0, className, html }) {

	let div = document.createElement('div');
	div.className = `notification ${className}`;

	div.textContent = html;
	div.style.top = top + 'px';
	div.style.right = right + 'px';

	document.body.append(div);

	setTimeout(() => div.remove(), 1500);
}