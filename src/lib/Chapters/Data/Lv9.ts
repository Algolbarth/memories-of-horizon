import { ChapterDeck } from '../../Deck/Chapter';
import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv9_Reine extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 325);

        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier géant", "Reine"]);
        this.addStep(45, ["Ville"], 10, deck, ["Chevalier géant", "Reine"], ["Le chevalier favori de la reine exige un duel pour présenter une audience au souverain local."]);
    };
};