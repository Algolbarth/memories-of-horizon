import { Train } from "../Training/Train";
import * as cards from "../Cards/Data";
import * as chapters from "../Chapters/Data";
import * as stories from "../Stories";
import { Music } from "../Music/Class";
import { Settings } from "../Settings/Class";
import { RessourceList } from "../Ressources/Class";
import type { Deck } from "../Decks/Deck";
import type { Story } from "../Stories/Story";
import { Game } from "../Game/Game";
import { Card } from "../Cards/Class";
import { Chapter } from "../Chapters/Class";
import type { Account } from "../Login/Account";

export class System {
    page: string = "BlackScreen";
    account: Account | undefined;
    settings: Settings = new Settings();
    game: undefined | Game;
    chapters: Chapters = new Chapters(this);
    bosses: Bosses = new Bosses(this);
    cards: Cards = new Cards(this);
    ressources: RessourceList = new RessourceList();
    train: Train = new Train();
    decks: Deck[] = [];
    deck: Deck | undefined;
    stories: Story[] = [];
    sort = new Sort();
    view: View = new View();
    music: Music = new Music(this);

    constructor() {
        for (const element of this.ressources.list) {
            if (element.name == "Or") {
                this.sort.elements.push("Neutre");
            } else if (element.name != "Mana") {
                this.sort.elements.push(element.name);
            }
        }

        for (const card of Object.keys(cards)) {
            let cardClass = cards[card];
            let cardInstance = new cardClass(this);

            for (const famille of cardInstance.familles.base) {
                if (!this.sort.familles.includes(famille)) {
                    this.sort.familles.push(famille);
                }
            }

            this.cards.class.push(cardClass);
            this.cards.instance.push(cardInstance);
        }

        for (let i = 0; i < this.sort.familles.length; i++) {
            let j = i;
            while (
                j > 1 &&
                this.sort.familles[j - 1].localeCompare(this.sort.familles[j]) > 0
            ) {
                let swap = this.sort.familles[j];
                this.sort.familles[j] = this.sort.familles[j - 1];
                this.sort.familles[j - 1] = swap;
                j--;
            }
        }

        for (const chapter of Object.keys(chapters)) {
            let chapterClass = chapters[chapter];
            let chapterInstance: Chapter = new chapterClass(this, new Game(this, "Construit"), 0);

            let error: boolean = false;
            for (const step of chapterInstance.steps) {
                let ressources = [];
                for (const ressource of this.ressources.list) {
                    ressources.push({
                        name: ressource.name,
                        value: 0,
                    });
                }
                for (const card_name of step.cards) {
                    let card = this.cards.getByName(card_name);
                    if (card == undefined) {
                        console.log("Invalid card in a chapter : " + card);
                        error = true;
                    } else {
                        for (let i = 0; i < card.cost.length; i++) {
                            ressources[i].value += card.cost[i].value();
                        }
                    }
                }
                for (const ressource of ressources) {
                    if (ressource.value > 0) {
                        let check = false;
                        for (const cost of chapterInstance.ressources) {
                            if (cost.name == ressource.name) {
                                check = true;
                                if (ressource.value > cost.value) {
                                    console.log(
                                        "Invalid ressources in a chapter : " +
                                        ressource.name +
                                        " " +
                                        (ressource.value - cost.value)
                                    );
                                    error = true;
                                }
                            }
                        }
                        if (!check) {
                            console.log("Missing ressources in a chapter : " + ressource.name + " " + ressource.value);
                            error = true;
                        }
                    }
                }
            }

            let level = chapterInstance.getLevel();
            if (chapterInstance.boss) {
                this.bosses.class[level / 2].push(chapterClass);
                this.bosses.instance[level / 2].push(chapterInstance);
            } else {
                this.chapters.class[level].push(chapterClass);
                this.chapters.instance[level].push(chapterInstance);
            }

            if (error) {
                console.log(chapterClass);
            }
        }

        let index: number = 0;
        for (const level of this.chapters.instance) {
            if (index > 0 && level.length == 0) {
                console.log("No chapter level " + index);
            }
            index++;
        }

        for (const story of Object.keys(stories)) {
            this.stories.push(new stories[story]());
        }
        for (let i = 0; i < this.stories.length; i++) {
            let j = i;
            while (j > 0 && this.stories[j - 1].id > this.stories[j].id) {
                let trans = this.stories[j];
                this.stories[j] = this.stories[j - 1];
                this.stories[j - 1] = trans;
                j--;
            }
        }
    };
};

class Cards {
    class: any[] = [];
    instance: Card[] = [];
    system: System;

    constructor(system: System) {
        this.system = system;
    };

    getByName(name: string): Card {
        for (let i = 0; i < this.instance.length; i++) {
            if (this.instance[i].name == name) {
                return new this.class[i](this.system);
            }
        }
        return new Card(this.system);
    };
};

class Chapters {
    class: any[][] = [];
    instance: Chapter[][] = [];
    system: System;

    constructor(system: System) {
        this.system = system;

        for (let i = 0; i <= 20; i++) {
            this.class.push([]);
            this.instance.push([]);
        }
    };

    getRandom(number: number) {
        let level = Math.floor((number - 1) / 5) + 1;
        return new this.class[level][
            Math.floor(Math.random() * this.class[level].length)
        ](this.system, this.system.game, number);
    };
};

class Bosses {
    class: any[][] = [];
    instance: Chapter[][] = [];
    system: System;

    constructor(system: System) {
        this.system = system;

        for (let i = 0; i <= 10; i++) {
            this.class.push([]);
            this.instance.push([]);
        }
    };

    getRandom(number: number) {
        let level = Math.floor((number - 1) / 10) + 1;
        return new this.class[level][
            Math.floor(Math.random() * this.class[level].length)
        ](this.system, this.system.game, number);
    };
};

class View {
    quick: Deck | Card | undefined = undefined;
    card: Deck | Card | undefined = undefined;

    reset() {
        this.quick = undefined;
        this.card = undefined;
    };
};

class Sort {
    levels: string[] = ["Tous"];
    types: string[] = ["Tous", "Action", "Bâtiment", "Créature", "Objet", "Lieu"];
    familles: string[] = ["Toutes"];
    elements: string[] = ["Tous"];

    constructor() {
        for (let i = 0; i < 20; i++) {
            this.levels.push("" + (i + 1));
        }
    };
};
