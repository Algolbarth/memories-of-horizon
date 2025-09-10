import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MimiqueDeJarre extends Creature {
    name = "Mimique de jarre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;

        this.text = Text;
    };

    useEffect = function () {
        this.move("Terrain", this.owner.adversary());
        this.pose();
    };

    dieEffect = function () {
        this.owner.adversary().ressource("Or").stock += 10;
    };
}