import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class EpeeEnflammee extends Equipment {
    name = "Épée enflammée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Feu", 25]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(50);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        defender.damageByEffect(50);
    };
};