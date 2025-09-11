import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class TuniqueDEcailles extends Equipment {
    name = "Tunique d'écailles";

    constructor(system: System) {
        super(system);

        this.init([["Or", 100]]);
        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 75;
        this.equipStat("Endurance").base = 25;
        this.equipStat("Résistance").base = 25;

        this.text = Text;
    };
}