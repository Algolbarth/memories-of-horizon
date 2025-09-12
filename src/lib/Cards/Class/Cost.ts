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

    value = () => {
        let total = this.base + this.add;
        return total;
    };

    increase = (value: number) => {
        this.add += value;
    };

    decrease = (value: number) => {
        this.add -= value;
    };
};