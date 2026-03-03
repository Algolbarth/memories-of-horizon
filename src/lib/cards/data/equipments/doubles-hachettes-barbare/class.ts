import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from '$lib/cards/utils/equip-text.svelte';

export class DoublesHachettesBarbare extends Equipment {
    name = "Doubles hachettes barbare";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60]]);

        this.initFamily(["Arme"]);

        this.equipStat("Adresse").init(35);
        this.equipStat("Agilité").init(1);

        this.text = Text;
    };
};