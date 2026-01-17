import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChevalierDElite extends Creature {
    name = "Chevalier d'élite";
    otherForm = "Chevalier d'élite (monté)";
    mounted = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.families.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(30);
        this.stat("Force").init(30);
        this.stat("Endurance").init(10);
        this.stat("Résistance").init(10);
    };
}

export class ChevalierDEliteMonte extends Creature {
    name = "Chevalier d'élite (monté)";
    otherForm = "Chevalier d'élite";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.families.base.push("Humain", "Chevalier");

        this.stat("Constitution").init(20);
        this.stat("Force").init(40);
        this.stat("Vitesse").init(2);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            this.transform("Chevalier d'élite");
            this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
        }
    };

    dieGo = () => {

    };
}