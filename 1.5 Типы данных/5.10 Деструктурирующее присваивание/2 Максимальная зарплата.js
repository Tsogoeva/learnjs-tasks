let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if ((topName && salaries[topName]) < salary) {
            topName = name;
        }
    }

    return topName;
}
