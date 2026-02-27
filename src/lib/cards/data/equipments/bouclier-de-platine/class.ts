import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BouclierDePlatine extends Equipment {
    name = "Bouclier de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Endurance").init(100);

        this.text = Text;
    };
};