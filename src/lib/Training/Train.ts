import type { Deck } from "../Decks/Deck";

export class Train {
    deck: Deck | undefined = undefined;
    player: Train_Entity;
    bot: Train_Entity;
    add = new Train_Add();

    constructor() {
        this.player = this.entity();
        this.player.gold = 200;
        this.player.flux = 200;

        this.bot = this.entity();
    };

    entity = function () {
        return new Train_Entity();
    };
}

class Train_Add {
    entity: string | undefined = undefined;
    zone: Train_Zone | undefined = undefined;

    reset = function () {
        this.zone = undefined;
    };
}

export class Train_Entity {
    life: number = 100;
    gold: number = 0;
    flux: number = 0;
    zones: Train_Zone[] = [
        new Train_Zone("Lieux", 3, undefined, ["Plaine"]),
        new Train_Zone("Boutique", 10, 1),
        new Train_Zone("Main", 10),
        new Train_Zone("Terrain", 10),
        new Train_Zone("Défausse"),
    ];
}

export class Train_Zone {
    name: string;
    cards: string[] = [];
    level: number | undefined;
    size: number | undefined;

    constructor(name: string, size: (number | undefined) = undefined, level: (number | undefined) = undefined, cards: string[] = []) {
        this.name = name;
        this.size = size;
        this.level = level;
        this.cards = cards;
    };
}