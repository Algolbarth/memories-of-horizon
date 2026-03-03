import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class ChevaliereImperiale extends Equipment {
    name = "Chevalière impériale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.equipElements = ["Neutre"];

        this.text = Text;
    };
};