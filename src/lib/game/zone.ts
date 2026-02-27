import type { Card } from "../cards/class";

export class Zone {
    name: string;
    size: number | undefined;
    cards: Card[] = [];

    constructor(name: string, size: number | undefined = undefined) {
        this.name = name;
        this.size = size;
    };

    isFull = () => {
        return this.cards.length == this.size;
    };

    isNotFull = () => {
        return !this.isFull();
    };
};