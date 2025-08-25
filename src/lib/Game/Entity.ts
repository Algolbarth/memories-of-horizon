import type { Card } from "../Cards/Class";
import type { System } from "../System/Class";
import { copy } from "../Utils";
import { Shop } from "./Shop";
import { Zone } from "./Zone";

export class Entity {
    life = {
        current: 0,
        max: 0,
        set: function (value: number) {
            this.current = value;
            this.max = value;
        }
    };
    zones: Zone[] = [
        new Zone("Lieux", 3),
        new Shop(),
        new Zone("Main", 10),
        new Zone("Terrain", 10),
        new Zone("Défausse")
    ];
    ressources: Ressource[] = [];
    place: Card | undefined = undefined;
    system: System;
    step: number = 0;

    constructor(system: System) {
        this.system = system;
        this.setRessources();
    };

    adversary = function () {
        if (this == this.system.game.player) {
            return this.system.game.bot;
        }
        return this.system.game.player;
    };

    setRessources = function () {
        for (const r of this.system.ressources.list) {
            this.ressources.push(new Ressource(r.name));
        }
    };

    zone = function (name: string) {
        for (const z of this.zones) {
            if (z.name == name) {
                return z;
            }
        }
    };

    ressource = function (name: string) {
        for (const z of this.ressources) {
            if (z.name == name) {
                return z;
            }
        }
    };

    getCard = function (name: string) {
        let card = this.system.cards.getByName(name);
        card.owner = this;
        if (this == this.system.game.player) {
            card.cache = false;
        }
        else {
            card.cache = true;
        }
        return card;
    };

    cardList = function (condition: (Function | undefined) = undefined, drawer: Card) {
        let nameList: string[] = [];

        if (this.system.game.deck == undefined) {
            for (const card of this.system.cards.instance) {
                if (this.place && this.place.condition(card) && card.level <= this.zone("Boutique").level && !card.trait("Rare").value() && !card.trait("Légendaire").value() && (condition == undefined || condition(card, drawer))) {
                    nameList.push(card.name);
                }
            }
        }
        else {
            for (const c of this.system.game.deck.cards) {
                let card = this.system.cards.getByName(c);
                if (this.place && this.place.condition(card) && card.level <= this.zone("Boutique").level) {
                    nameList.push(c);
                }
            }
        }

        return nameList;
    };

    draw = function (number: number, condition: (Function | undefined) = undefined, drawer: (Card | undefined) = undefined, array: Card[] = []) {
        let nameList: string[] = this.cardList(condition, drawer);
        let card: Card | undefined = undefined;

        if (nameList.length > 0) {
            card = this.getCard(nameList[Math.floor(Math.random() * nameList.length)]);
            card?.add("Boutique");
        }

        array.push(card);

        if (number > 1) {
            array = this.draw(number - 1, condition, drawer, array);
        }
        return array;
    };

    discover = function (number: number, condition: Function, drawer: Card, array: Card[] = []) {
        let nameList: string[] = this.cardList(condition, drawer);
        let card = undefined;

        for (const card of this.zone("Boutique").cards) {
            if (nameList.includes(card.name)) {
                nameList.splice(nameList.indexOf(card.name), 1);
            }
        }

        if (nameList.length > 0) {
            card = this.getCard(nameList[Math.floor(Math.random() * nameList.length)]);
            card.add("Boutique");
        }

        array.push(card);

        if (number > 1) {
            array = this.discover(number - 1, condition, drawer, array);
        }
        return array
    };

    canUpShop = function () {
        if (this.ressource("Or").total() >= this.zone("Boutique").level * 10) {
            return true;
        }
        return false;
    };

    upShop = function () {
        if (this.canUpShop()) {
            this.ressource("Or").spend(this.zone("Boutique").level * 10);
            this.zone("Boutique").level++;
            this.refreshShop();
        }
    };

    canActualiseShop = function () {
        if (this.ressource("Or").total() >= 10) {
            return true;
        }
        return false;
    };

    actualiseShop = function () {
        if (this.canActualiseShop()) {
            this.ressource("Or").spend(10);
            this.refreshShop();
        }
    };

    refreshShop = function () {
        let boutique = copy(this.zone("Boutique").cards);
        for (const card of boutique) {
            if (!card.locked) {
                card.remove();
            }
        }
        if (this.zone("Boutique").cards.length < 5) {
            this.draw(5 - this.zone("Boutique").cards.length);
        }
    };

    isFullLocked = function () {
        let check = true;
        for (const card of this.zone("Boutique").cards) {
            if (!card.locked) {
                check = false;
            }
        }
        return check;
    };

    lock = function () {
        if (this.isFullLocked()) {
            for (const card of this.zone("Boutique").cards) {
                card.unlock();
            }
        }
        else {
            for (const card of this.zone("Boutique").cards) {
                card.lock();
            }
        }
    };

    play = function () {
        let playable = true;
        while (playable) {
            playable = false;

            for (let i = 0; i < this.zone("Main").cards.length; i++) {
                let card = this.zone("Main").cards[i];
                card.use();
                if (card.zone == undefined || card.zone.name != "Main") {
                    i--;
                    playable = true;
                }
            }
        }

        let boutique = copy(this.zone("Boutique").cards);
        for (const card of boutique) {
            card.buy();
        }

        for (const ressource of this.ressources) {
            ressource.current = ressource.max;
        }

        if (this.system.game.mode != "Entraînement") {
            if (this.step < this.system.game.chapter.steps.length) {
                for (const name of this.system.game.chapter.steps[this.step].cards) {
                    let card = this.getCard(name, this);
                    card.add("Boutique");
                }
            }
            this.step++;
        }
    };

    checkPerpetuite = function () {
        let defausse = copy(this.zone("Défausse").cards);
        for (const card of defausse) {
            if (card.stat("Perpétuité").value() == 1) {
                card.remove();
            }
            else {
                card.stat("Perpétuité").remove(1);
            }
        }
    };

    totalIntelligence = function () {
        let total = 0;
        for (const card of this.zone("Terrain").cards) {
            total += card.stat("Intelligence").value();
        }
        return total;
    };
}

class Ressource {
    name: string;
    current: number = 0;
    stock: number = 0;
    max: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    total = function () {
        return this.current + this.stock;
    };

    spend = function (value: number) {
        if (value < this.current) {
            this.current -= value;
            value = 0;
        }
        else {
            value -= this.current;
            this.current = 0;
        }

        this.stock -= value;
        if (this.stock < 0) {
            this.stock = 0;
        }
    };
}