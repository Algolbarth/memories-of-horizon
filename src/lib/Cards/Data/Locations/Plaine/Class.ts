import type { System } from '../../../../System/Class';
import { Location } from '../../../Class/Location';
import Text from './Text.svelte';

export class Plaine extends Location {
    name = "Plaine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };
}