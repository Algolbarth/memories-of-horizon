import type { System } from '../../../../system/class';
import { Location } from '../../../class/location';
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