import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BottesDeGrandPas extends Equipment {
    name = "Bottes de grand pas";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitesse").init(10);

        this.text = Text;
    };
};