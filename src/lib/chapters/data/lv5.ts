import { ChapterDeck } from '../../deck/chapter';
import type { Game } from '../../game/game';
import type { System } from '../../system/class';
import { Chapter } from '../class';

export class Lv5_Chevalier extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 100);

        let deck = new ChapterDeck(system, "Chevaliers", ["Chevalier (monté)", "Chevalier"]);
        this.addStep(25, ["Plaine"], 10, deck, ["Chevalier (monté)", "Chevalier (monté)"], ["Une troupe de chevalier errant terrorise la région en usant de leur privilège pour vivre aux dépends des habitants."]);
    };
};