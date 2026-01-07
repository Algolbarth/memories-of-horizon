import type { Card } from "./Class";

export class Stat {
    name: string;
    base: number;
    add: number = 0;
    step: number = 0;
    turn: number = 0;
    min: number;
    card: Card;
    debuff: boolean = false;

    constructor(name: string, value: number, min: number, card: Card) {
        this.name = name;
        this.base = value;
        this.min = min;
        this.card = card;
    };

    value = () => {
        let total = this.base + this.add + this.step + this.turn;
        if (this.card.type == "Créature") {
            for (const equipment of this.card.equipments) {
                total += equipment.equipStat(this.name).value();
            }
        }

        if (total < this.min) {
            total = this.min;
        }

        return total;
    };

    increase = (value: number) => {
        this.add += value;
    };

    decrease = (value: number) => {
        this.add -= value;
    };

    remove = (value: number) => {
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

    fix = (value: number) => {
        if (this.value() < value) {
            this.set(value);
        }
    };

    set = (value: number) => {
        this.step = 0;
        this.turn = 0;
        this.add = value - this.base;
    };

    display = () => {
        return this.condition();
    };

    condition = () => {
        if (this.value() > this.min) {
            return true;
        }
        return false;
    };

    init = (value: number) => {
        this.base = value;
    };
};