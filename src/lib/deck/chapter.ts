import type { System } from "$lib/system/class";
import { StandardDeck } from "./standard";

export class ChapterDeck extends StandardDeck {
    constructor(system: System, name: string, cards: string[]) {
        super(system, 0, name, cards);
    };

    isPlayable = () => {
        return false;
    };
};