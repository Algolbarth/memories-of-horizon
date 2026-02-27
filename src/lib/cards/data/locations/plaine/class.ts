import type { System } from '../../../../system/class';
import { Location } from '../../../class/location';
import Text from './text.svelte';

export class Plaine extends Location {
    name = "Plaine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };
}