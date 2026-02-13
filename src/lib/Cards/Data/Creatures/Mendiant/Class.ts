import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Mendiant extends Creature {
    name = "Mendiant";

    constructor(system: System) {
        super(system);

        this.init([["Or", 1]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Or").spend(2);
        }
    };
};