import { ChapterDeck } from '../../deck/chapter';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv7_Roi extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 200);

        let deck = new ChapterDeck(system, "Roi", ["Soldat", "Roi"]);
        this.addStep(35, ["Ville"], 10, deck, ["Soldat", "Soldat", "Soldat", "Soldat", "Roi"], ["Le trône du royaume local est occupé par un usurpateur.", "Les villages alentours vous somment de faire tomber ce faux-roi."]);
    };
};