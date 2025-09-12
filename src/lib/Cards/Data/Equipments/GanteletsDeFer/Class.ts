import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

export class GanteletsDeFer extends Equipment {
    name = "Gantelets de fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.familles.base.push("Armure");

        this.equipStat("Vitalité").base = 30;
        this.equipStat("Endurance").base = 15;
        this.equipStat("Maîtrise").base = 1;

        this.text = Text;
    };

    playEffect = function () {
        this.bearer.stat("Garde").fix(20);
    };
}