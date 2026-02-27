import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class BaguetteEnBois extends Equipment {
    name = "Baguette en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Arme"]);

        this.equipStat("Magie").init(5);

        this.text = Text;
    };
};