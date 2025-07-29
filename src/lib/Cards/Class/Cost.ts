import type { Card } from "./Class";

export class Cout {
    name: string;
    add: number = 0;
    base: number = 0;
    card: Card;

    constructor(name: string, card: Card) {
        this.name = name;
        this.card = card;
    };

    value = function () {
        let total = this.base + this.add;
        return total;
    };
};