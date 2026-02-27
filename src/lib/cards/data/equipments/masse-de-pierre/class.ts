import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class MasseDePierre extends Equipment {
    name = "Masse de pierre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(10);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Endurance").increase(5);
    };
};