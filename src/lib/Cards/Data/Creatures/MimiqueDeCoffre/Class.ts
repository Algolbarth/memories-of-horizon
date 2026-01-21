import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MimiqueDeCoffre extends Creature {
    name = "Mimique de coffre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain", this.adversary());
        this.pose();
    };

    dieEffect = () => {
        if (this.zone.name == "Terrain") {
            let cards = this.adversary().draw(5);
            for (const c of cards) {
                c.lock();
            }
        }
    };
};