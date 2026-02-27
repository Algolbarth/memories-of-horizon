import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class OrbeDeVerre extends Equipment {
    name = "Orbe de verre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Armure"]);

        this.equipStat("Résistance").init(5);

        this.text = Text;
    };
};