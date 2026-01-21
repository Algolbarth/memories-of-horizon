import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class ChevalierGeant extends Creature {
    name = "Chevalier géant";
    otherForm = "Chevalier géant (monté)";
    mounted = false;

    constructor(system: System) {
        super(system);

        this.init([["Or", 150]]);

        this.initFamily(["Géant", "Chevalier"]);

        this.stat("Constitution").init(100);
        this.stat("Force").init(100);
        this.stat("Endurance").init(25);
        this.stat("Résistance").init(25);
    };
}

export class ChevalierGeantMonte extends Creature {
    name = "Chevalier géant (monté)";
    otherForm = "Chevalier géant";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 300]]);

        this.initFamily(["Géant", "Chevalier"]);

        this.trait("Rare").base = true;

        this.stat("Constitution").init(50);
        this.stat("Force").init(150);
        this.stat("Vitesse").init(5);

        this.text = Text;
    };

    dieEffect = () => {
        if (this.zone.name != "Pile") {
            this.transform("Chevalier géant");
            this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
        }
    };

    dieGo = () => {

    };
}