export class Trait {
    add = false;
    step = false;
    turn = false;

    constructor(name, value, card) {
        this.name = name;
        this.base = value;
        this.card = card;
    };

    value = function () {
        let total = this.base + this.add + this.step + this.turn;
        if (this.card.type == "Créature") {
            for (const equipment of this.card.equipments) {
                total += equipment.equipStat(this.name).value();
            }
        }
        return total;
    };
};
