import { ChapterDeck } from '../../deck/chapter';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv3_Geant extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 50);

        let deck = new ChapterDeck(system, "Géants", ["Géant"]);
        this.addStep(15, ["Plaine"], 10, deck, ["Géant"], ["Un géant manque de vous marcher dessus.", "Il serait bon ton de lui apprendre à faire attention."]);
    };
};