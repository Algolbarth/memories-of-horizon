import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MimiqueDeCoffre extends Creature {
    name = "Mimique de coffre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        this.move("Terrain", this.owner.adversary());
        this.pose();
    };

    dieEffect = function () {
        this.owner.adversary().draw(5);
    };
}