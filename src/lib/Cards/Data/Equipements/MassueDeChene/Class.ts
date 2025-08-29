import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class MassueDeChene extends Equipment {
    name = "Massue de chêne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);
        this.familles.base.push("Arme");

        this.equipStat("Vie").base = 15;

        this.text = Text;
    };

    fightEffect = function () {
        this.bearer.stat("Vie").current += 10;
        this.bearer.stat("Vie").add += 10;
    };
}