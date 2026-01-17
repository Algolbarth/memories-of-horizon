import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class LanceIncendiaire extends Equipment {
    name = "Lance incendiaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45], ["Feu", 45]]);

        this.families.base.push("Arme");

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        defender.stat("Brûlure").increase(5);
        defender.stat("Endurance").decrease(defender.stat("Brûlure").value());
    };
};