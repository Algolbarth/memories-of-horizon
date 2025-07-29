import type { System } from "../System/Class";

export class Deck {
    name: string;
    cards: string[] = [];
    victory: number = 0;
    defeat: number = 0;
    system: System;

    constructor(system: System) {
        this.system = system;

        this.name = this.changeName("Nouveau deck", 0);
    };

    changeName = function (name: string, number: number) {
        let newName = name;
        if (number > 0) {
            newName += " (" + number + ")";
        }
        for (const deck of this.system.decks) {
            if (deck != this && deck.name == newName) {
                return this.changeName(name, number + 1);
            }
        }
        this.name = newName;
        
        return this.name;
    };

    canModify = function () {
        if (this.victory > 0 || this.defeat > 0) {
            return false;
        }
        return true;
    };

    add = function (name: string) {
        if (!this.check(name)) {
            this.cards.push(name);
        }
    };

    remove = function (name: string) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i] == name) {
                this.cards.splice(i, 1);
            }
        }
    };

    check = (name: string) => {
        for (const card of this.cards) {
            if (card == name) {
                return true;
            }
        }
        return false;
    };

    clone = function () {
        let deck = new Deck(this.system);
        deck.changeName(this.name, 0);
        for (const card of this.cards) {
            deck.add(card);
        }
        this.system.decks.push(deck);
    };

    delete = function () {
        for (let i = 0; i < this.system.decks.length; i++) {
            if (this.system.decks[i].name == this.name) {
                this.system.decks.splice(i, 1);
            }
        }
        this.system.deck = undefined;
    };

    playable = function () {
        for (const card of this.cards) {
            if (this.system.cards.getByName(card).level == 1) {
                return true;
            }
        }
        return false;
    };

    code = function () {
        let code = this.name + "_";
        for (const card of this.cards) {
            code += card + "_";
        }
        return code;
    };
}