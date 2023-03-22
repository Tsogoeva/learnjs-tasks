class HttpError extends Error {
	constructor(response) {
		super(`${response.status} for ${response.url}`);
		this.name = 'HttpError';
		this.response = response;
	}
}

async function loadJson(url) {
	try {
		let response = await fetch(url);
		if (response.status === 200) {
			return await response.json();
		}

		throw error;
	} catch (error) {
		throw new HttpError(response);
	}
}


async function demoGithubUser() {
	let name = prompt("Введите логин?", "iliakan");
	let user;

	try {
		user = await loadJson(`https://api.github.com/users/${name}`);

		alert(`Полное имя: ${user.name}.`);
		return user;
	} catch (error) {
		if (err instanceof HttpError && err.response.status == 404) {
			alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
		} else {
			throw err;
		}
	}
}

demoGithubUser();
