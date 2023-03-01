function sumSalaries(salaries) {
    let sum = 0;

    for (let value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
}
