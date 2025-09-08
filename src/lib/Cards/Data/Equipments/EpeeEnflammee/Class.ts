import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class EpeeEnflammee extends Equipment {
    name = "Épée enflammée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Force").base = 20;

        this.text = Text;
    };

    fightEffect = function (defender: Unit) {
        defender.damageByEffect(20);
    };
}