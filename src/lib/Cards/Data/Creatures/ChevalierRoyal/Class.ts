import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chevalier extends Creature {
    name = "Chevalier";
    otherForm = "Chevalier (monté)";
    mounted = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(20);
        this.stat("Force").init(20);
        this.stat("Endurance").init(5);
    };
}

export class ChevalierMonte extends Creature {
    name = "Chevalier (monté)";
    otherForm = "Chevalier";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 150]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(10);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    dieEffect = () => {
        this.transform("Chevalier");
        this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
    };

    dieGo = () => {

    };
}