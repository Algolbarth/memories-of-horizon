import type { Card } from "../Cards/Class";
import { Creature } from "../Cards/Class/Creature";
import type { Location } from "../Cards/Class/Location";
import type { Deck } from "../Deck/Class";
import type { System } from "../System/Class";
import { copy } from "../Utils";
import { Stack } from "./Stack";
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
        new Zone("Région", 3),
        new Stack(),
        new Zone("Réserve", 10),
        new Zone("Terrain", 10),
        new Zone("Défausse")
    ];
    ressources: EntityRessource[] = [];
    place: Location | undefined = undefined;
    system: System;
    step: number = 0;
    deck: Deck;

    constructor(system: System, deck: Deck) {
        this.system = system;
        this.deck = deck;

        this.setRessources();
    };

    adversary = () => {
        if (this == this.system.game.player) {
            return this.system.game.bot;
        }
        return this.system.game.player;
    };

    setRessources = () => {
        for (const r of this.system.ressources.list) {
            this.ressources.push(new EntityRessource(r.name));
        }
    };

    zone = (name: string) => {
        for (const z of this.zones) {
            if (z.name == name) {
                return z;
            }
        }
        return new Zone(name);
    };

    ressource = (name: string) => {
        for (const z of this.ressources) {
            if (z.name == name) {
                return z;
            }
        }
        return new EntityRessource(name);
    };

    getCard = (name: string) => {
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

    cardList = (read_condition: (Function | undefined) = undefined, drawer: Card | undefined) => {
        let nameList: string[] = [];

        for (const c of this.deck.cards) {
            let card = this.system.cards.getByName(c);
            if (this.place && this.place.can_read(card) && card.level <= this.zone("Pile").level() && (read_condition == undefined || read_condition(card, drawer))) {
                nameList.push(c);
            }
        }

        return nameList;
    };

    draw = (number: number, read_condition: (Function | undefined) = undefined, drawer: (Card | undefined) = undefined, array: Card[] = []) => {
        let nameList: string[] = this.cardList(read_condition, drawer);

        if (nameList.length > 0) {
            let card: Card = this.getCard(nameList[Math.floor(Math.random() * nameList.length)]);
            card?.add("Pile");
            array.push(card);
        }

        if (number > 1) {
            array = this.draw(number - 1, read_condition, drawer, array);
        }
        return array;
    };

    discover = (number: number, read_condition: Function, drawer: Card, array: Card[] = []) => {
        let nameList: string[] = this.cardList(read_condition, drawer);

        for (const card of this.zone("Pile").cards) {
            if (nameList.includes(card.name)) {
                nameList.splice(nameList.indexOf(card.name), 1);
            }
        }

        if (nameList.length > 0) {
            let card: Card = this.getCard(nameList[Math.floor(Math.random() * nameList.length)]);
            card.add("Pile");
            array.push(card);
        }

        if (number > 1) {
            array = this.discover(number - 1, read_condition, drawer, array);
        }
        return array;
    };

    canUpStack = () => {
        if (this.ressource("Or").total() >= this.zone("Pile").upgrade_cost) {
            return true;
        }
        return false;
    };

    upStack = () => {
        if (this.canUpStack()) {
            this.ressource("Or").spend(this.zone("Pile").upgrade_cost);
            this.zone("Pile").base_level++;
            this.zone("Pile").upgrade_cost = this.zone("Pile").base_level * 10;
            this.refreshStack();
        }
    };

    canActualiseStack = () => {
        if (this.ressource("Or").total() >= 10) {
            return true;
        }
        return false;
    };

    actualiseStack = () => {
        if (this.canActualiseStack()) {
            this.ressource("Or").spend(10);
            this.refreshStack();
        }
    };

    refreshStack = () => {
        let stack = copy(this.zone("Pile").cards);
        for (const card of stack) {
            if (!card.locked) {
                card.remove();
            }
        }
        if (this.zone("Pile").cards.length < 5) {
            this.draw(5 - this.zone("Pile").cards.length);
        }
        for (const entity of [this.system.game.player, this.system.game.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {

                    if (card.refreshStackEffect != undefined) {
                        card.refreshStackEffect();
                    }

                    if (card instanceof Creature) {
                        for (const e of card.equipments) {
                            if (e.refreshStackEffect != undefined) {
                                e.refreshStackEffect();
                            }
                        }
                    }
                }
            }
        }
    };

    isFullLocked = () => {
        let check = true;
        for (const card of this.zone("Pile").cards) {
            if (!card.locked) {
                check = false;
            }
        }
        return check;
    };

    lock = () => {
        if (this.isFullLocked()) {
            for (const card of this.zone("Pile").cards) {
                card.unlock();
            }
        }
        else {
            for (const card of this.zone("Pile").cards) {
                card.lock();
            }
        }
    };

    play = () => {
        let playable = true;
        while (playable) {
            playable = false;

            for (let i = 0; i < this.zone("Réserve").cards.length; i++) {
                let card = this.zone("Réserve").cards[i];
                if (card.canUse()) {
                    card.use();
                    if (card.zone == undefined || card.zone.name != "Réserve") {
                        i--;
                        playable = true;
                    }
                }
            }
        }

        let stack = copy(this.zone("Pile").cards);
        for (const card of stack) {
            card.buy();
        }

        for (const ressource of this.ressources) {
            ressource.current = ressource.production;
        }

        this.refreshStack();
    };

    checkPerpetuite = () => {
        let defausse = copy(this.zone("Défausse").cards);
        for (const card of defausse) {
            if (card.stat("Persistance").value() == 1) {
                card.remove();
            }
            else {
                card.stat("Persistance").remove(1);
            }
        }
    };

    totalIntelligence = () => {
        let total = 0;
        for (const card of this.zone("Terrain").cards) {
            total += card.stat("Intelligence").value();
        }
        return total;
    };

    isLoser = () => {
        return this.zone("Terrain").cards.length == 0 || this.life.current <= 0;
    };
};

class EntityRessource {
    name: string;
    current: number = 0;
    stockage: number = 0;
    production: number = 0;

    constructor(name: string) {
        this.name = name;
    };

    total = () => {
        return this.current + this.stockage;
    };

    spend = (value: number) => {
        if (value < this.current) {
            this.current -= value;
            value = 0;
        }
        else {
            value -= this.current;
            this.current = 0;
        }

        this.stockage -= value;
        if (this.stockage < 0) {
            this.stockage = 0;
        }
    };

    produce = (value: number) => {
        this.current += value;
    };

    stock = (value: number) => {
        this.stockage += value;
    };

    destock = (value: number) => {
        this.stockage -= value;
        if (this.stockage < 0) {
            this.stockage = 0;
        }
    };

    increase = (value: number) => {
        this.production += value;
    };

    decrease = (value: number) => {
        this.production -= value;
        if (this.production < 0) {
            this.production = 0;
        }
    };
};