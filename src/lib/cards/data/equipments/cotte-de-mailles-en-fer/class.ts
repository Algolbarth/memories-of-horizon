import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class CotteDeMaillesEnFer extends Equipment {
    name = "Cotte de mailles en fer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Armure"]);

        this.equipStat("Vitalité").init(25);
        this.equipStat("Endurance").init(12);

        this.text = Text;
    };
};