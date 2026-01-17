import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Marchand extends Creature {
    name = "Marchand";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.ressource("Or").production++;
        this.move("Terrain");
        this.pose();
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Or").production++;
        }
    };
};