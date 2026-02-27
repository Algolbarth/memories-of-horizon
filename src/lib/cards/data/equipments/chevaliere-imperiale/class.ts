import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
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