import type { System } from '$lib/system/class';
import { Location } from '$lib/cards/class/location';
import Text from './text.svelte';

export class MerDEther extends Location {
    name = "Mer d'ether";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.trait("Légendaire").init(true);

        this.text = Text;
    };
};