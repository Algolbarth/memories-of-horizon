import { ChapterDeck } from '../../deck/chapter';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv9_Reine extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 325);

        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier géant", "Reine"]);
        this.addStep(45, ["Ville"], 10, deck, ["Chevalier géant", "Reine"], ["Le chevalier favori de la reine exige un duel pour présenter une audience au souverain local."]);
    };
};