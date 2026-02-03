import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MimiqueDeJarre extends Creature {
    name = "Mimique de jarre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain", this.adversary());
        this.pose();
    };

    dieEffect = () => {
        if (this.zone.name == "Terrain") {
            this.adversary().ressource("Or").stock(10);
        }
    };
};