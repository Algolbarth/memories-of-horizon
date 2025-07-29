import { Stat } from "./Stat";
import { Trait } from "./Trait";
import { Elements } from "./Element";
import { Cout } from "./Cost";
import { copy } from "../../Utils";
import { Families } from "./Family";
import type { System } from "../../System/Class";
import type { Entity } from "../../Game/Entity";
import type { Component } from "svelte";
import type { Zone } from "../../Game/Zone";

export class Card {
    name: string = "Carte";
    cout: Cout[] = [];
    vente: Cout[] = [];
    level: number = 0;
    type: string = "Carte";
    familles: Families = new Families(this);
    traits: Trait[] = [];
    stats: Stat[] = [];
    elements: Elements = new Elements(this);
    system: System;
    locked: boolean = false;
    zone: Zone | undefined;
    owner: Entity | undefined; 
    text: Component | undefined | null;

    constructor(system: System) {
        this.system = system;

        this.addTrait("Légendaire", false);

        this.addTrait("Rare", false);

        this.addStat("Perpétuité", 0);
        this.stat("Perpétuité").current = 0;

        for (const ressource of system.ressources.list) {
            this.cout.push(new Cout(ressource.name, this));
            this.vente.push(new Cout(ressource.name, this));
        }
    };

    init = function (array) {
        let total = 0;
        for (const element of array) {
            this.getCout(element[0]).base += element[1];
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

        let total_vente = 0;
        for (const element of array) {
            this.getVente(element[0]).base += Math.floor(element[1] / 2);
            total_vente += Math.floor(element[1] / 2);
        }
        if (total_vente * 2 + 1 < total) {
            this.getVente("Or").base++;
        }
    };

    getCout = function (name: string) {
        for (const c of this.cout) {
            if (c.name == name) {
                return c;
            }
        }
        return undefined;
    };

    getVente = function (name: string) {
        for (const v of this.vente) {
            if (v.name == name) {
                return v;
            }
        }
        return undefined;
    };

    coutTotal = function () {
        let total = 0;
        for (const cout of this.cout) {
            total += cout.value();
        }
        return total;
    };

    coutReduce = function (value: number) {
        let best = this.getCout("Or");
        for (const cout of this.cout) {
            if (cout.value() > best.value()) {
                best = cout;
            }
        }
        best.base--;
        value--;

        if (value > 0) {
            this.coutReduce(value);
        }
    };

    venteTotal = function () {
        let total = 0;
        for (const vente of this.vente) {
            total += vente.value();
        }
        return total;
    };

    remove = function () {
        if (this.isUnit() && this.zone.name == "Terrain") {
            this.owner.ressource("Mana").max -= this.stat("Magie").value();
        }

        this.removeEffect(this.zone.name);

        this.zone.cards.splice(this.slot, 1);
        for (let i = this.slot; i < this.zone.cards.length; i++) {
            this.zone.cards[i].slot--;
        }
        this.zone = undefined;
        this.slot = undefined;
    };

    removeEffect = function () {

    };

    add = function (zone: string, entity: Entity = this.owner) {
        if (!entity.zone(zone).isFull()) {
            this.owner = entity;
            this.zone = entity.zone(zone);
            this.slot = entity.zone(zone).cards.length;

            if (zone == "Défausse") {
                this.stat("Perpétuité").current = 2;
            }
            else {
                this.stat("Perpétuité").current = 0;
            }

            if (!["Main", "Boutique"].includes(zone)) {
                this.cache = false;
            }

            if (this.isUnit() && zone == "Terrain") {
                entity.ressource("Mana").current += this.stat("Magie").value();
                entity.ressource("Mana").max += this.stat("Magie").value();
            }

            this.addEffect(zone);

            entity.zone(zone).cards.push(this);
        }
    };

    addEffect = function () {

    };

    move = function (zone: string, entity: Entity = this.owner) {
        this.remove();
        this.add(zone, entity);
    };

    up = function () {
        let temp = this.zone.cards[this.slot - 1];

        this.zone.cards[this.slot - 1] = this;
        this.zone.cards[this.slot] = temp;

        temp.slot++;
        this.slot--;
    };

    down = function () {
        let temp = this.zone.cards[this.slot + 1];

        this.zone.cards[this.slot + 1] = this;
        this.zone.cards[this.slot] = temp;

        temp.slot--;
        this.slot++;
    };

    canBuy = function () {
        for (const c of this.cout) {
            if (c.value() > this.owner.ressource(c.name).total()) {
                return false;
            }
        }
        if (this.owner.zone("Main").isFull()) {
            return false;
        }
        return true;
    };

    buy = function () {
        if (this.canBuy()) {
            for (const c of this.cout) {
                this.owner.ressource(c.name).spend(c.value());
            }
            this.locked = false;
            this.move("Main");
        }
    };

    lock = function (state: boolean) {
        this.locked = state;
    };

    sell = function () {
        for (const v of this.vente) {
            this.owner.ressource(v.name).current += v.value();
        }
        this.remove();
    };

    use = function () {
        this.select();
    };

    select = function () {
        this.useEffect();
    };

    useEffect = function () {
        this.move("Défausse");
        this.pose();
    };

    pose = function () {
        this.cache = false;

        for (const entity of [this.system.game.player, this.system.game.bot]) {
            for (const zone of entity.zones) {
                let cpy = copy(zone.cards);
                for (const card of cpy) {
                    if (card != this) {
                        card.otherPoseEffect(this);
                        if (card.type == "Créature") {
                            for (const e of card.equipments) {
                                e.otherPoseEffect(this);
                            }
                        }
                    }
                }
            }
        }
    };

    otherPoseEffect = function () {

    };

    destroy = function () {
        if (!this.trait("Légendaire").value()) {
            this.move("Défausse");
        }
    };

    otherDieEffect = function () {

    };

    startStepEffect = function () {

    };

    startBattleEffect = function () {

    };

    turnEffect = function () {

    };

    text = undefined;

    description = function () {
        return "...";
    };

    stat = function (name: string) {
        for (const s of this.stats) {
            if (name == s.name) {
                return s;
            }
        }
    };

    addStat = function (name: string, value: number, min: number = 0) {
        this.stats.push(new Stat(name, value, min, this));
    };

    hasStat = function () {
        for (const s of this.stats) {
            if (s.value() > 0 || s.current > 0) {
                return true;
            }
        }
        return false;
    };

    trait = function (name: string) {
        for (const t of this.traits) {
            if (name == t.name) {
                return t;
            }
        }
    };

    addTrait = function (name: string, value: boolean) {
        this.traits.push(new Trait(name, value, this));
    };

    hasTrait = function () {
        for (const t of this.traits) {
            if (t.value()) {
                return true;
            }
        }
        return false;
    };

    isUnit = function () {
        if (this.type == "Créature" || this.type == "Bâtiment") {
            return true;
        }
        return false;
    };

    transform = function (name: string) {
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
            newCard.stat(stat.name).current = stat.current;
            if (newCard.stat(stat.name).current > newCard.stat(stat.name).value()) {
                newCard.stat(stat.name).current = newCard.stat(stat.name).value();
            }
        }
        if (this.zone.cards[this.slot].type == "Créature") {
            for (const e of this.equipments) {
                newCard.equipments.push(e);
                e.bearer = newCard;
            }
        }
    };

    targeting = function (target: Card) {
        target.targetEffect(this);
        return true;
    };

    targetEffect = function (card: Card) {

    };
};