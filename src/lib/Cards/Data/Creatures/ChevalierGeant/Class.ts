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
        this.familles.base.push("Géant", "Chevalier");

        this.stat("Constitution").init(120);
        this.stat("Force").init(120);
        this.stat("Endurance").init(30);
    };
}

export class ChevalierGeantMonte extends Creature {
    name = "Chevalier géant (monté)";
    otherForm = "Chevalier géant";
    mounted = true;

    constructor(system: System) {
        super(system);

        this.init([["Or", 300]]);
        this.familles.base.push("Géant", "Chevalier");

        this.trait("Rare").base = true;

        this.stat("Constitution").init(200);
        this.stat("Force").init(200);
        this.stat("Endurance").init(50);
        this.stat("Vitesse").init(5);

        this.text = Text;
    };

    dieEffect = () => {
        this.transform("Chevalier géant");
        this.zone.cards[this.slot].stat("Santé").init(this.zone.cards[this.slot].stat("Vitalité").value());
    };

    dieGo = () => {

    };
}