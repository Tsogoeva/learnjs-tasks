function readNumber() {
    let number;

    do {
        number = prompt('Введите число', 0);
    } while (!isFinite(number));
        
    if (number === '' || number === null) {
        return null;
    } 
    return +number;
}

alert(readNumber());
