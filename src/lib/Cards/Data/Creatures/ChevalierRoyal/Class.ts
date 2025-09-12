import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChevalierRoyal extends Creature {
    name = "Chevalier royal";
    otherForm = "Chevalier royal (monté)";
    mounted = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(60);
        this.stat("Force").init(60);
        this.stat("Endurance").init(20);
        this.stat("Résistance").init(20);
    };
}

export class ChevalierRoyalMonte extends Creature {
    name = "Chevalier royal (monté)";
    otherForm = "Chevalier royal";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 200]]);
        this.familles.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(10);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    dieEffect = () => {
        this.transform("Chevalier royal");
        this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
    };

    dieGo = () => {

    };
}