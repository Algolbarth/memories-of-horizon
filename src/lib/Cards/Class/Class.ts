import { Stat } from "./Stat";
import { Trait } from "./Trait";
import { Elements } from "./Element";
import { Cost } from "./Cost";
import { copy } from "../../Utils";
import { Families } from "./Family";
import type { System } from "../../System/Class";
import type { Entity } from "../../Game/Entity";
import type { Zone } from "../../Game/Zone";

export class Card {
    name: string = "Carte";
    cost: Cost[] = [];
    sale: Cost[] = [];
    level: number = 0;
    type: string = "Carte";
    familles: Families = new Families(this);
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

        this.addStat("Perpétuité", 0);

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
        if (this.owner && this.zone && this.slot) {
            if (this.isUnit() && this.zone.name == "Terrain") {
                this.owner.ressource("Mana").max -= this.stat("Magie").value();
            }

            if (this.removeEffect != undefined) {
                this.removeEffect(this.zone.name);
            }

            this.zone.cards.splice(this.slot, 1);
            for (let i = this.slot; i < this.zone.cards.length; i++) {
                this.zone.cards[i].slot--;
            }
            this.zone = undefined;
            this.slot = undefined;
        }
    };

    removeEffect: Function | undefined;

    add = (zone: string, entity: Entity = this.owner) => {
        if (!entity.zone(zone).isFull()) {
            this.owner = entity;
            this.zone = entity.zone(zone);
            this.slot = entity.zone(zone).cards.length;

            if (zone == "Défausse") {
                this.stat("Perpétuité").add = 2;
            }
            else {
                this.stat("Perpétuité").set(0);
            }

            if (!["Réserve", "Pile"].includes(zone)) {
                this.cache = false;
            }

            if (this.isUnit() && zone == "Terrain") {
                entity.ressource("Mana").current += this.stat("Magie").value();
                entity.ressource("Mana").max += this.stat("Magie").value();
            }

            if (this.addEffect != undefined) {
                this.addEffect(zone);
            }

            entity.zone(zone).cards.push(this);
        }
    };

    addEffect: Function | undefined;

    move = (zone: string, entity: Entity = this.owner) => {
        this.remove();
        this.add(zone, entity);
    };

    up = () => {
        let temp = this.zone.cards[this.slot - 1];

        this.zone.cards[this.slot - 1] = this;
        this.zone.cards[this.slot] = temp;

        temp.slot++;
        this.slot--;
    };

    down = () => {
        let temp = this.zone.cards[this.slot + 1];

        this.zone.cards[this.slot + 1] = this;
        this.zone.cards[this.slot] = temp;

        temp.slot--;
        this.slot++;
    };

    canBuy = () => {
        for (const c of this.cost) {
            if (c.value() > this.owner.ressource(c.name).total()) {
                return false;
            }
        }
        if (this.owner.zone("Réserve").isFull()) {
            return false;
        }
        return true;
    };

    buy = () => {
        if (this.canBuy()) {
            for (const c of this.cost) {
                this.owner.ressource(c.name).spend(c.value());
            }
            this.locked = false;
            this.move("Réserve");
        }
    };

    lock = () => {
        this.locked = true;
    };

    unlock = () => {
        this.locked = false;
    };

    sell = () => {
        if (this.sellEffect != undefined) {
            this.sellEffect();
        }

        for (const v of this.sale) {
            this.owner.ressource(v.name).current += v.value();
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
    };

    otherPoseEffect: Function | undefined;

    destroy = () => {
        if (!this.trait("Légendaire").value()) {
            this.move("Défausse");
        }
    };

    otherDieEffect: Function | undefined;

    startStepEffect: Function | undefined;

    startBattleEffect: Function | undefined;

    turnEffect: Function | undefined;

    description = () => {
        return "...";
    };

    stat = (name: string) => {
        for (const s of this.stats) {
            if (name == s.name) {
                return s;
            }
        }
        return new Stat(name, 0, 0, this);
    };

    addStat = (name: string, value: number, min: number = 0) => {
        this.stats.push(new Stat(name, value, min, this));
    };

    hasStat = () => {
        for (const s of this.stats) {
            if (s.condition()) {
                return true;
            }
        }
        return false;
    };

    hasDebuff = () => {
        for (const s of this.stats) {
            if (s.condition() && s.debuff) {
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

    hasTrait = () => {
        for (const t of this.traits) {
            if (t.value()) {
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
        let newCard = this.system.cards.getByName(name);
        this.zone.cards[this.slot] = newCard;

        this.zone.cards[this.slot].owner = this.owner;
        this.zone.cards[this.slot].zone = this.zone;
        this.zone.cards[this.slot].slot = this.slot;

        for (const trait of this.traits) {
            newCard.trait(trait.name).add = trait.add;
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
    };

    targeting = (target: Card) => {
        if (target.targetEffect != undefined) {
            target.targetEffect(this);
        }
        return true;
    };

    targetEffect: Function | undefined;
};