import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class CapitaineDeLaGarde extends Creature {
    name = "Capitaine de la garde";

    constructor(system: System) {
        super(system);

        this.init([["Or", 70]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Protection").init(1);

        this.text = Text;
    };

    useEffect = () => {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.stat("Protection").value() > 0) {
                card.stat("Protection").increase(1);
            }
        }
        this.move("Terrain");
        this.pose();
    };
}