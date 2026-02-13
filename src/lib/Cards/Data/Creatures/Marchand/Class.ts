import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Marchand extends Creature {
    name = "Marchand";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.ressource("Or").increase(1);

        this.move("Terrain");
        this.pose();
    };

    startPhaseEffect = () => {
        if (this.zone.name == "Terrain") {
            this.owner.ressource("Or").increase(1);
        }
    };
};