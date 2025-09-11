import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class RobeDeVelours extends Equipment {
    name = "Robe de velours";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 75;
        this.equipStat("Résistance").base = 50;

        this.text = Text;
    };
}