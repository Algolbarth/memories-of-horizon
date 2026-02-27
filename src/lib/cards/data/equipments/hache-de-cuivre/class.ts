import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
import Text from '../../../utils/equip-text.svelte';

export class HacheDeCuivre extends Equipment {
    name = "Hache de cuivre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(20);

        this.text = Text;
    };
};