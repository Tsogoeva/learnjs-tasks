async function loadJson(url) {
	try {
		let response = await fetch(url);
		return await response.json();
	} catch (error) {
		throw new Error(response.status);
	}
}

loadJson('no-such-user.json')
	.catch(alert);
