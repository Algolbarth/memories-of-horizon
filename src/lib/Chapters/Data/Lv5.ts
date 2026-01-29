import { ChapterDeck } from '../../Deck/Chapter';
import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv5_Chevalier extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 100);

        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier (monté)", "Chevalier"]);
        this.addStep(25, ["Plaine"], 10, deck, ["Chevalier (monté)", "Chevalier (monté)"], ["Une troupe de chevalier errant terrorise la région en usant de leur privilège pour vivre aux dépends des habitants."]);
    };
};