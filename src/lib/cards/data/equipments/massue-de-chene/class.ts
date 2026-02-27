import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class MassueDeChene extends Equipment {
    name = "Massue de chêne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Végétal", 18]]);

        this.initFamily(["Arme"]);

        this.equipStat("Vitalité").init(15);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Constitution").increase(10);
    };
};