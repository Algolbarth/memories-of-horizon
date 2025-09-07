import type { System } from '../../../../System/Class';
import { Lieu } from '../../../Class/Location';
import Text from './Text.svelte';

export class Plaine extends Lieu {
    name = "Plaine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.text = Text;
    };
}