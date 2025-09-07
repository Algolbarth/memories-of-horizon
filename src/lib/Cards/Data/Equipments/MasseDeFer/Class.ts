import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MasseDeFer extends Equipment {
    name = "Masse de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Attaque").base = 5;
        this.equipStat("Vie").base = 5;

        this.text = Text;
    };

    fightEffect = function () {
        this.bearer.stat("Attaque").add += 5;
        this.bearer.stat("Vie").current += 5;
        this.bearer.stat("Vie").add += 5;
    };
}