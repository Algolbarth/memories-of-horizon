import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

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

    startPhaseEffect = () => {
        if (this.isArea("Inventaire")) {
            this.getSale("Or").increase(5);
        }
    };
};