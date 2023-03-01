const showPrimeNumber = (number) => {
    let currentNum;
    
    for (let i = 2; i <= number; i++) {
        currentNum = [];

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                currentNum.push(j);
            }
        }

        if (!currentNum.length) {
            alert(i);
        }
    }
}

showPrimeNumber(10);
