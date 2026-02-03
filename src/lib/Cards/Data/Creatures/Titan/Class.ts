import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Titan extends Creature {
    name = "Titan";

    constructor(system: System) {
        super(system);

        this.init([["Or", 200]]);

        this.initFamily(["Géant"]);

        this.stat("Constitution").init(100);
        this.stat("Force").init(100);

        this.text = Text;
    };

    useEffect = () => {
        let battlefield = copy(this.owner.zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature) {
                if (card.level >= 5) {
                    card.stat("Constitution").increase(20);
                    card.stat("Force").increase(20);
                }
                else {
                    card.damageByEffect(20);
                }
            }
        }

        this.move("Terrain");
        this.pose();
    };
};