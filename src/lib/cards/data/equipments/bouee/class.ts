import type { System } from '$lib/system/class';
import { Equipment } from '$lib/cards/class/equipment';
import Text from './text.svelte';

export class Bouee extends Equipment {
    name = "Bouée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);

        this.equipElements = ["Eau"];

        this.text = Text;
    };
};