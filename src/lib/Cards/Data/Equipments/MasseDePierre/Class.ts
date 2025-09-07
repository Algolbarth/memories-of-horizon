import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MasseDePierre extends Equipment {
    name = "Masse de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 10;

        this.text = Text;
    };

    fightEffect = function () {
        this.bearer.stat("Défense").add += 5;
    };
}