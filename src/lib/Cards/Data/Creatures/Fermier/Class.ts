import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Fermier extends Creature {
    name = "Fermier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Or").current += 5;
        }
    };
};