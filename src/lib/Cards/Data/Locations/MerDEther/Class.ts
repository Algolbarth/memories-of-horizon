import type { System } from '../../../../System/Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class MerDEther extends Location {
    name = "Mer d'ether";

    constructor(system: System) {
        super(system);

        this.level = 20;
        this.trait("Légendaire").init(true);

        this.text = Text;
    };
};