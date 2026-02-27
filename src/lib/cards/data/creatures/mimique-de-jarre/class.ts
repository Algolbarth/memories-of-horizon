import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

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

    perishEffect = () => {
        if (this.isArea("Terrain")) {
            this.adversary().ressource("Or").stock(10);
        }
    };
};