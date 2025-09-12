import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class MasseDeFer extends Equipment {
    name = "Masse de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);
        this.familles.base.push("Arme");

        this.equipStat("Force").base = 5;
        this.equipStat("Vitalité").base = 5;

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Constitution").increase(5);
        this.bearer.stat("Force").increase(5);
    };
}