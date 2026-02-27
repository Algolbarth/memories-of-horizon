import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from './text.svelte';

export class BouclierDeRoche extends Equipment {
    name = "Bouclier de roche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(10);

        this.text = Text;
    };

    defendEffect = () => {
        this.bearer.stat("Endurance").increase(2);
    };
};