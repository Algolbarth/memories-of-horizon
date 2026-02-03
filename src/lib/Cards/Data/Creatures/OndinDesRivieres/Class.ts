import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class OndinDesRivieres extends Creature {
    name = "Ondin des rivières";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Eau", 12]]);

        this.initFamily(["Ondin"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Eau").produce(10);
        }
    };
};