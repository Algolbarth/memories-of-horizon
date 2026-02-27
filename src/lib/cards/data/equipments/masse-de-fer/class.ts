import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class MasseDeFer extends Equipment {
    name = "Masse de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(5);
        this.equipStat("Vitalité").init(5);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Constitution").increase(5);
        this.bearer.stat("Force").increase(5);
    };
};