import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class CotteDeMaillesEnFer extends Equipment {
    name = "Cotte de mailles en fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 25;
        this.equipStat("Endurance").base = 12;

        this.text = Text;
    };
}