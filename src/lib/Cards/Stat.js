export class Stat {
    add = 0;
    step = 0;
    turn = 0;

    constructor(name, value, min, card) {
        this.name = name;
        this.base = value;
        this.min = min;
        this.card = card;
    };

    value = function () {
        let total = this.base + this.add + this.step + this.turn;
        if (this.card.type == "Créature") {
            for (const equipment of this.card.equipments) {
                total += equipment.equipStat(this.name).value();
            }
        }

        if (total < this.min) {
            this.add -= total + this.min;
            total = this.min;
        }

        if (this.current != undefined && this.current > total) {
            this.current = total;
        }

        return total;
    };

    increase = function (value) {
        this.add += value;
    };

    fix = function (value) {
        if (this.value() < value) {
            this.add += value - this.value();
        }
    };

    remove = function (value) {
        while (value > 0) {
            if (this.turn > 0) {
                this.turn--;
            }
            else if (this.step > 0) {
                this.step--;
            }
            else {
                this.add--;
            }
            value--;
        }
    };
};