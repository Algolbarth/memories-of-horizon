import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';

export class ChevaliereImperiale extends Equipment {
    name = "Chevalière impériale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.equipElements = ["Neutre"];

        this.text = Text;
    };
};