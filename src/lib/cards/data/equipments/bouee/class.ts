import type { System } from '../../../../system/class';
import { Equipment } from '../../../class/equipment';
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