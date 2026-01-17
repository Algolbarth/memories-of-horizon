import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MassueDeChene extends Equipment {
    name = "Massue de chêne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Végétal", 18]]);

        this.families.base.push("Arme");

        this.equipStat("Vitalité").init(15);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Constitution").increase(10);
    };
};