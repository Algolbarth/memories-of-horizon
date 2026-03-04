import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/unit';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class LanceIncendiaire extends Equipment {
    name = "Lance incendiaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45], ["Feu", 45]]);

        this.initFamily(["Arme"]);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        defender.stat("Brûlure").increase(5);
        defender.stat("Endurance").decrease(defender.stat("Brûlure").value());
    };
};