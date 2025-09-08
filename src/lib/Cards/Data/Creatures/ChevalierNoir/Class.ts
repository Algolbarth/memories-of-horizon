import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Text2 from './Text2.svelte';
import Use from './Use.svelte';

export class ChevalierNoir extends Creature {
    name = "Chevalier noir";
    otherForm = "Chevalier noir (monté)";
    mounted = false;
    rez = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Santé").base = 20;
        this.stat("Santé").current = 20;
        this.stat("Force").base = 20;
        this.stat("Endurance").base = 5;

        this.text = Text2;
    };

    dieEffect = function () {
        if (this.owner.ressource("Or").total() >= 20) {
            this.owner.ressource("Or").spend(20);
            this.stat("Santé").current = 1;
            this.rez = true;
        }
    };

    dieGo = function () {
        if (this.rez) {
            this.rez = false;
        }
        else {
            this.move("Défausse");
        }
    };
}

export class ChevalierNoirMonte extends Creature {
    name = "Chevalier noir (monté)";
    otherForm = "Chevalier noir";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;
        this.stat("Force").base = 20;
        this.stat("Vitesse").base = 1;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = function (target: Unit) {
        if (target != undefined) {
            let value = target.stat("Santé").current;
            if (this.owner.ressource("Or").total() < value) {
                value = this.owner.ressource("Or").total();
            }
            this.owner.ressource("Or").spend(value);
            target.damageByEffect(value);
        }
        this.move("Terrain");
        this.pose();
    };

    dieEffect = function () {
        this.transform("Chevalier noir");
        this.zone.cards[this.slot].stat("Santé").current = this.zone.cards[this.slot].stat("Santé").value();
    };

    dieGo = function () {

    };
}