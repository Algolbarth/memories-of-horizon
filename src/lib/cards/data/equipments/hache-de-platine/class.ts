import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class HacheDePlatine extends Equipment {
    name = "Hache de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(50);
        this.equipStat("Intensité").init(2);

        this.text = Text;
    };
};