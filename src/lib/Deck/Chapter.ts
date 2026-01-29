import type { System } from "../System/Class";
import { Deck } from "./Class";

export class ChapterDeck extends Deck {
    constructor(system: System, name: string, cards: string[]) {
        super(system);

        this.name = name;
        this.cards = cards;

        for (const card of this.cards) {
            system.cards.getByName(card);
        }
    };
};