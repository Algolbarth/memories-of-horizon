import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Barde extends Creature {
    name = "Barde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner.zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                card.stat("Force").step += 5;
                card.stat("Vitalité").step += 5;
                card.stat("Santé").step += 5;
            }
        }

        this.move("Terrain");
        this.pose();
    };
};