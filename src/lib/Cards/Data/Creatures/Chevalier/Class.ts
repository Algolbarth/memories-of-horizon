import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Chevalier extends Creature {
    name = "Chevalier";
    otherForm = "Chevalier (monté)";
    mounted = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.families.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);
        this.stat("Endurance").init(5);
        this.stat("Résistance").init(5);
    };
}

export class ChevalierMonte extends Creature {
    name = "Chevalier (monté)";
    otherForm = "Chevalier";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.families.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(10);
        this.stat("Force").init(20);
        this.stat("Vitesse").init(1);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            this.transform("Chevalier");
            this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
        }
    };

    dieGo = () => {

    };
}