import type { Card } from "../Cards/Class";

export class Zone {
    name: string;
    size: number | undefined;
    cards: Card[] = [];

    constructor(name: string, size: number | undefined = undefined) {
        this.name = name;
        this.size = size;
    };

    isFull = function () {
        return this.cards.length == this.size;
    };
}