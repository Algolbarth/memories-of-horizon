import { Stat } from "./Stat";
import { Trait } from "./Trait";
import { Elements } from "./Element";
import { Cost } from "./Cost";
import { copy } from "../../Utils";
import { Families } from "./Family";
import type { System } from "../../System/Class";
import { Entity } from "../../Game/Entity";
import type { Zone } from "../../Game/Zone";

export class Card {
    name: string = "Carte";
    cost: Cost[] = [];
    sale: Cost[] = [];
    level: number = 0;
    type: string = "Carte";
    families: Families = new Families(this);
    traits: Trait[] = [];
    stats: Stat[] = [];
    elements: Elements = new Elements(this);
    system: System;
    locked: boolean = false;
    slot: number | undefined;
    zone: Zone | undefined;
    owner: Entity | undefined;
    text: __sveltets_2_IsomorphicComponent<{ system: System; card: Card; }, { [evt: string]: CustomEvent<any>; }, {}, {}, string> | undefined;
    cache: boolean = false;

    constructor(system: System) {
        this.system = system;

        this.addTrait("Légendaire", false);

        this.addTrait("Rare", false);

        this.addStat("Persistance", 0);

        for (const ressource of system.ressources.list) {
            this.cost.push(new Cost(ressource.name, this));
            this.sale.push(new Cost(ressource.name, this));
        }
    };

    init = (array: any[]) => {
        let total = 0;
        for (const element of array) {
            this.getCost(element[0]).base += element[1];
            total += element[1];
            if (element[0] != "Or") {
                this.elements.base.push(element[0]);
            }
        }
        if (this.elements.base.length == 0) {
            this.elements.base.push("Neutre");
        }

        if (this.level == 0) {
            this.level = Math.floor((total - 1) / 10) + 1;
            if (this.level > 20) {
                this.level = 20;
            }
        }

        let total_sale = 0;
        for (const element of array) {
            this.getSale(element[0]).base += Math.floor(element[1] / 2);
            total_sale += Math.floor(element[1] / 2);
        }
        if (total_sale * 2 + 1 < total) {
            this.getSale("Or").base++;
        }
    };

    getCost = (name: string) => {
        for (const c of this.cost) {
            if (c.name == name) {
                return c;
            }
        }
        return new Cost(name, this);
    };

    getSale = (name: string) => {
        for (const v of this.sale) {
            if (v.name == name) {
                return v;
            }
        }
        return new Cost(name, this);
    };

    costTotal = () => {
        let total = 0;
        for (const cost of this.cost) {
            total += cost.value();
        }
        return total;
    };

    costReduce = (value: number) => {
        while (value > 0) {
            let best = this.getCost("Or");
            for (const cost of this.cost) {
                if (cost.value() > best.value()) {
                    best = cost;
                }
            }
            best.base--;
            value--;
        }
    };

    saleTotal = () => {
        let total = 0;
        for (const sale of this.sale) {
            total += sale.value();
        }
        return total;
    };

    remove = () => {
        if (this.owner != undefined && this.zone != undefined && this.slot != undefined) {
            if (this.isUnit() && this.zone.name == "Terrain") {
                this.owner.ressource("Mana").decrease(this.stat("Magie").value());
            }

            if (this.removeEffect != undefined) {
                this.removeEffect(this.zone.name);
            }

            this.zone.cards.splice(this.slot, 1);
            for (let i = this.slot; i < this.zone.cards.length; i++) {
                let card = this.zone.cards[i];
                if (card.slot != undefined) {
                    card.slot--;
                }
            }
            this.zone = undefined;
            this.slot = undefined;
        }
    };

    removeEffect: Function | undefined;

    add = (zone: string, entity: Entity | undefined = this.owner) => {
        if (entity != undefined && !entity.zone(zone).isFull()) {
            this.owner = entity;
            this.zone = entity.zone(zone);
            this.slot = entity.zone(zone).cards.length;

            if (zone == "Défausse") {
                this.stat("Persistance").add = 2;
            }
            else {
                this.stat("Persistance").set(0);
            }

            if (!["Inventaire", "Pile"].includes(zone)) {
                this.cache = false;
            }

            if (this.isUnit() && zone == "Terrain") {
                entity.ressource("Mana").produce(this.stat("Magie").value());
                entity.ressource("Mana").increase(this.stat("Magie").value());
            }

            if (this.addEffect != undefined) {
                this.addEffect(zone);
            }

            entity.zone(zone).cards.push(this);
        }
    };

    addEffect: Function | undefined;

    move = (zone: string, entity: Entity | undefined = this.owner) => {
        this.remove();
        this.add(zone, entity);
    };

    up = () => {
        if (this.zone != undefined && this.slot != undefined && this.zone.cards[this.slot - 1] != undefined) {
            let temp: Card = this.zone.cards[this.slot - 1];

            this.zone.cards[this.slot - 1] = this;
            this.zone.cards[this.slot] = temp;

            if (temp.slot != undefined) {
                temp.slot++;
            }
            this.slot--;
        }
    };

    down = () => {
        if (this.zone != undefined && this.slot != undefined && this.zone.cards[this.slot + 1] != undefined) {
            let temp = this.zone.cards[this.slot + 1];

            this.zone.cards[this.slot + 1] = this;
            this.zone.cards[this.slot] = temp;

            if (temp.slot != undefined) {
                temp.slot--;
            }
            this.slot++;
        }
    };

    canBuy = () => {
        if (this.owner == undefined) {
            return false;
        }

        for (const c of this.cost) {
            if (c.value() > this.owner.ressource(c.name).total()) {
                return false;
            }
        }

        if (this.owner.zone("Inventaire").isFull()) {
            return false;
        }

        return true;
    };

    buy = () => {
        if (this.owner != undefined && this.canBuy()) {
            for (const c of this.cost) {
                this.owner.ressource(c.name).spend(c.value());
            }
            this.locked = false;
            this.move("Inventaire");
        }
    };

    lock = () => {
        this.locked = true;
    };

    unlock = () => {
        this.locked = false;
    };

    sell = () => {
        if (this.system.game && this.owner) {
            if (this.sellEffect != undefined) {
                this.sellEffect();
            }

            for (const v of this.sale) {
                this.owner.ressource(v.name).produce(v.value());
            }

            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const zone of entity.zones) {
                    let cpy = copy(zone.cards);
                    for (const card of cpy) {
                        if (card != this) {

                            if (card.otherSellEffect != undefined) {
                                card.otherSellEffect(this);
                            }

                            if (card.type == "Créature") {
                                for (const e of card.equipments) {
                                    if (e.otherSellEffect != undefined) {
                                        e.otherSellEffect(this);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        this.remove();
    };

    sellEffect: Function | undefined;

    otherSellEffect: Function | undefined;

    canUse = () => {
        return true;
    };

    use = () => {
        this.select();
    };

    select = () => {
        this.useEffect();
    };

    useEffect: Function = () => {
        this.move("Défausse");
        this.pose();
    };

    pose = () => {
        if (this.system.game) {
            this.cache = false;

            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const zone of entity.zones) {
                    let cpy = copy(zone.cards);
                    for (const card of cpy) {
                        if (card != this) {
                            if (card.otherPoseEffect != undefined) {
                                card.otherPoseEffect(this);
                            }

                            if (card.type == "Créature") {
                                for (const e of card.equipments) {
                                    if (e.otherPoseEffect != undefined) {
                                        e.otherPoseEffect(this);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    otherPoseEffect: Function | undefined;

    canDestroy = () => {
        if (!this.trait("Légendaire").value()) {
            return true;
        }
        return false;
    };

    destroy = () => {
        if (this.system.game) {
            for (const entity of [this.system.game.player, this.system.game.bot]) {
                for (const zone of entity.zones) {
                    let cpy = copy(zone.cards);
                    for (const card of cpy) {
                        if (card != this) {
                            if (card.otherDestroyEffect != undefined) {
                                card.otherDestroyEffect(this);
                            }

                            if (card.type == "Créature") {
                                for (const e of card.equipments) {
                                    if (e.otherDestroyEffect != undefined) {
                                        e.otherDestroyEffect(this);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (this.zone != undefined && this.zone.name == "Pile") {
            this.remove();
        }
        else {
            this.move("Défausse");
        }
    };

    otherDieEffect: Function | undefined;

    otherDestroyEffect: Function | undefined;

    startStepEffect: Function | undefined;

    startAdversaryStepEffect: Function | undefined;

    endStepEffect: Function | undefined;

    endAdversaryStepEffect: Function | undefined;

    startBattleEffect: Function | undefined;

    turnEffect: Function | undefined;

    refreshStackEffect: Function | undefined;

    description = () => {
        return "...";
    };

    checkStat = (name: string) => {
        for (const s of this.stats) {
            if (name == s.name) {
                return s;
            }
        }
        return undefined;
    };

    stat = (name: string) => {
        let check = this.checkStat(name);
        if (check == undefined) {
            return new Stat(name, 0, 0, this);
        }
        return check;
    };

    addStat = (name: string, value: number, min: number = 0) => {
        this.stats.push(new Stat(name, value, min, this));
    };

    displayStat = () => {
        for (const s of this.stats) {
            if (s.display()) {
                return true;
            }
        }
        return false;
    };

    hasDebuff = () => {
        for (const s of this.stats) {
            if (s.debuff && s.condition()) {
                return true;
            }
        }
        return false;
    };

    trait = (name: string) => {
        for (const t of this.traits) {
            if (name == t.name) {
                return t;
            }
        }
        return new Trait(name, false, this);
    };

    addTrait = (name: string, value: boolean) => {
        this.traits.push(new Trait(name, value, this));
    };

    displayTrait = () => {
        for (const t of this.traits) {
            if (t.display()) {
                return true;
            }
        }
        return false;
    };

    isUnit = () => {
        if (this.type == "Créature" || this.type == "Bâtiment") {
            return true;
        }
        return false;
    };

    transform = (name: string) => {
        if (this.zone != undefined && this.slot != undefined) {
            let newCard: Card = this.system.cards.getByName(name);
            this.zone.cards[this.slot] = newCard;

            this.zone.cards[this.slot].owner = this.owner;
            this.zone.cards[this.slot].zone = this.zone;
            this.zone.cards[this.slot].slot = this.slot;

            for (const trait of this.traits) {
                newCard.trait(trait.name).add = trait.add;
                newCard.trait(trait.name).step = trait.step;
                newCard.trait(trait.name).turn = trait.turn;
            }
            for (const stat of this.stats) {
                newCard.stat(stat.name).add = stat.add;
                newCard.stat(stat.name).step = stat.step;
                newCard.stat(stat.name).turn = stat.turn;
            }

            if (this.zone.cards[this.slot].type == "Créature") {
                for (const e of this.equipments) {
                    newCard.equipments.push(e);
                    e.bearer = newCard;
                }
            }
        }
    };

    targeting = (target: Card) => {
        if (target.targetEffect != undefined) {
            target.targetEffect(this);
        }
        return true;
    };

    targetEffect: Function | undefined;

    adversary = () => {
        if (this.owner != undefined) {
            return this.owner.adversary();
        }
        return new Entity(this.system);
    };

    initFamily = (families: string[]) => {
        for (const family of families) {
            this.families.base.push(family);
        }
    };

    isFamily = (family: string) => {
        return this.families.total().includes(family);
    };
};