function sumInput() {
    let array = [];
    let value;

    while(true) {
        value = prompt('Введите значение', '');

        if (isNaN(value) || value === '' || value === null) break;

        array.push(+value);
    }

    let sum = 0;
    for (let number of array) {
        sum += number;
    }

    return sum;
}

alert(sumInput());
