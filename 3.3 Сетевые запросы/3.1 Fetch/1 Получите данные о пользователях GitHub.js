// async function getUsers(names) {
// 	let results = await Promise.all(names.map((name) => fetch(`https://api.github.com/users/${name}`)));

// 	return await Promise.all(results.map((response) => {
// 		return response.ok ? response.json() : null;
// 	}));
// }
