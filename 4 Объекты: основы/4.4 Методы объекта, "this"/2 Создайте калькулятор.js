let calculator = {
    read() {
        this.key1 = +prompt('Введите число', 0);
        this.key2 = +prompt('Введите число', 0);
    },

    sum() {
        this.key1 + this.key2;
    },

    mul() {
        this.key1 * this.key2;
    },
}
