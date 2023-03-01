function Calculator() {

    this.read = function() {
        this.key1 = +prompt('Введите число', 0);
        this.key2 = +prompt('Введите число', 0);
    };

    this.sum = function() {
        this.key1 + this.key2;
    };

    this.mul = function() {
        this.key1 * this.key2;
    };
};
