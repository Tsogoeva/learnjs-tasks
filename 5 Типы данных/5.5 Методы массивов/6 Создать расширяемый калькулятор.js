function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        let arr = str.split(' ');
        const [num1, operator, num2] = arr;

        if (!this.operations[operator] || !isFinite(num1) || !isFinite(num2)) {
            return 'Ошибка';
        }

        return this.operations[operator](+num1, +num2);
    }

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }
}
