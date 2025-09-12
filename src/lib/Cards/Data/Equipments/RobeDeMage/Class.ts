import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class RobeDeMage extends Equipment {
    name = "Robe de mage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 20;
        this.equipStat("Résistance").base = 15;
        this.equipStat("Magie").base = 10;

        this.text = Text;
    };
}