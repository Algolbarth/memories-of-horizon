import { ChapterDeck } from '../../Deck/Chapter';
import type { Game } from '../../Game/Game';
import type { System } from '../../System/Class';
import { Chapter } from '../Class';

export class Lv15_Champion extends Chapter {
    constructor(system: System, game: Game, number: number) {
        super(system, game, number);

        this.addRessource("Or", 1000);

        let cards = ["Champion", "Égide"];
        for (let i = 1; i <= 8; i++) {
            cards.push("Fiole de corindon");
        }
        cards.push("Potion parfumée");
        let deck = new ChapterDeck(system, "Champion", ["Charisme"]);
        this.addStep(75, ["Ville"], 20, deck, cards, ["Dans une taverne animée, un homme bien habillé entre en scène, son regard rempli de mépris.", "Il se vante d'avoir maîtrisé l'art secret des parfums magiques, qui, selon lui, lui confèrent une force et une beauté surhumaines.", "Alors que les clients doutent de lui, il rit et se moque de chacun d'eux. ", "Il se pulvérise un parfum étrange, déclenchant une aura de pouvoir autour de lui."]);
    };
};