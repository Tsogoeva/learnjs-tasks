// Вариант с ?

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
}


// Вариант с ||

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
