import type { Card } from "./Class";

export class Stat {
    name: string;
    base: number;
    add: number = 0;
    step: number = 0;
    turn: number = 0;
    min: number;
    current: number | undefined;
    card: Card;
    debuff: boolean = false;

    constructor(name: string, value: number, min: number, card: Card) {
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

    increase = function (value: number) {
        this.add += value;
    };

    decrease = function (value: number) {
        this.add -= value;
    };

    fix = function (value: number) {
        if (this.value() < value) {
            this.set(value);
        }
    };

    set = function (value: number) {
        this.add = value - this.value();
    };

    remove = function (value: number) {
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

    condition = function () {
        if (this.value() > 0 || this.current > 0) {
            return true;
        }
    };
};