import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class BaguetteExplosive extends Equipment {
    name = "Baguette explosive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40], ["Feu", 35]]);

        this.initFamily(["Arme"]);

        this.equipStat("Magie").init(25);

        this.text = Text;
    };

    fightEffect = (defender: Unit) => {
        defender.damageByEffect(this.bearer.stat("Magie").value());
    };
};