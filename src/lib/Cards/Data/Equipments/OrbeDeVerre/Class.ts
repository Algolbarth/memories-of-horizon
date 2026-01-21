import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from '../../../Utils/EquipText.svelte';

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