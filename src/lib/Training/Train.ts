import type { Deck } from "../Decks/Deck";

export class Train {
    deck: Deck | undefined = undefined;
    player: TrainEntity;
    bot: TrainEntity;
    add = new Train_Add();

    constructor() {
        this.player = this.entity();
        this.player.gold = 200;
        this.player.flux = 200;

        this.bot = this.entity();
    };

    entity = function () {
        return new TrainEntity();
    };
}

class Train_Add {
    entity: string | undefined = undefined;
    zone: TrainZone | undefined = undefined;

    reset = function () {
        this.zone = undefined;
    };
}

export class TrainEntity {
    life: number = 100;
    gold: number = 0;
    flux: number = 0;
    mana: number = 0;
    zones: TrainZone[] = [
        new TrainZone("Région", 3, undefined, ["Plaine"]),
        new TrainZone("Pile", 10, 1),
        new TrainZone("Réserve", 10),
        new TrainZone("Terrain", 10),
        new TrainZone("Défausse"),
    ];
}

export class TrainZone {
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