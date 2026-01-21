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

        this.initFamily(["Humain", "Chevalier"]);

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

        this.initFamily(["Humain", "Chevalier"]);

        this.stat("Constitution").init(40);
        this.stat("Force").init(100);
        this.stat("Vitesse").init(3);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            this.transform("Chevalier royal");
            this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
        }
    };

    dieGo = () => {

    };
};