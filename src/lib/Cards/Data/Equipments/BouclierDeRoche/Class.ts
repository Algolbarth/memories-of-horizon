import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class BouclierDeRoche extends Equipment {
    name = "Bouclier de roche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);
        this.families.base.push("Armure");

        this.equipStat("Endurance").init(10);

        this.text = Text;
    };

    defendEffect = () => {
        this.bearer.stat("Endurance").increase(2);
    };
}