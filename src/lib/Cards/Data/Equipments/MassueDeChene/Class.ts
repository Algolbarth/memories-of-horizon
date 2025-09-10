import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MassueDeChene extends Equipment {
    name = "Massue de chêne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 18], ["Végétal", 18]]);
        this.familles.base.push("Arme");

        this.equipStat("Vitalité").base = 15;

        this.text = Text;
    };

    fightEffect = function () {
        this.bearer.stat("Constitution").increase(10);
    };
}