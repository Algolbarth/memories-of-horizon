export class Cout {
    add = 0;
    base = 0

    constructor(name, card) {
        this.name = name;
        this.card = card;
    };

    value = function () {
        let total = this.base + this.add;
        return total;
    };
};