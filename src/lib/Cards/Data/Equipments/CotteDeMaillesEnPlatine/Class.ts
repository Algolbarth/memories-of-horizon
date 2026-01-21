import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class CotteDeMaillesEnPlatine extends Equipment {
    name = "Cotte de mailles en platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(75);
        this.equipStat("Endurance").init(50);

        this.text = Text;
    };
};