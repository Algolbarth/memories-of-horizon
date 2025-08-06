import type { System } from '../../../../System/Class';
import { Equipment } from '../../../Class/Equipement';
import Text from './Text.svelte';

export class Bouee extends Equipment {
    name = "Bouée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Eau", 5]]);
        this.equipElements = ["Eau"];

        this.text = Text;
    };
}