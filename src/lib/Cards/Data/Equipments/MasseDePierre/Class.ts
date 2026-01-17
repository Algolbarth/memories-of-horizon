import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MasseDePierre extends Equipment {
    name = "Masse de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.families.base.push("Arme");

        this.equipStat("Force").init(10);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Endurance").increase(5);
    };
};