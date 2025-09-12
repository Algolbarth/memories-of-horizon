import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BaguetteExplosive extends Equipment {
    name = "Baguette explosive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 40]]);
        this.familles.base.push("Arme");

        this.equipStat("Magie").init(10);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        defender.damageByEffect(this.bearer.stat("Magie").value());
    };
}