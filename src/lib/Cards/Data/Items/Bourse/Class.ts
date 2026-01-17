import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Bourse extends Item {
    name = "Bourse";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.getSale("Or").base = 0;

        this.text = Text;
    };

    canUse = () => {
        return false;
    };

    startStepEffect = () => {
        if (this.zone.name == "Réserve") {
            this.getSale("Or").increase(5);
        }
    };
};