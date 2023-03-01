function truncate(str, maxlength) {
	let lengthStr = str.length;

	return (lengthStr > maxlength) ?
		str.slice(0, maxlength - 1) + '…' : str;
}
