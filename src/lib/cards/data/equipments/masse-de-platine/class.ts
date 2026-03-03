import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class MasseDePlatine extends Equipment {
    name = "Masse de platine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Arme"]);

        this.equipStat("Force").init(20);
        this.equipStat("Vitalité").init(20);

        this.text = Text;
    };

    fightEffect = () => {
        this.bearer.stat("Constitution").increase(20);
        this.bearer.stat("Force").increase(20);
    };
};