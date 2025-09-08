import type { Card } from "./Class";

export class Cost {
    name: string;
    base: number = 0;
    add: number = 0;
    card: Card;

    constructor(name: string, card: Card) {
        this.name = name;
        this.card = card;
    };

    value = function () {
        let total = this.base + this.add;
        return total;
    };

    increase = function (value: number) {
        this.add += value;
    };

    decrease = function (value: number) {
        this.add -= value;
    };
};