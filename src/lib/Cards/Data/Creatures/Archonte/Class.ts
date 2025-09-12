import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Archonte extends Creature {
    name = "Archonte";

    constructor(system: System) {
        super(system);

        this.init([["Or", 55], ["Terre", 55]]);
        this.familles.base.push("Nain");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 5;
        this.stat("Endurance").base = 3;

        this.text = Text;
    };

    useEffect = () => {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            card.stat("Endurance").increase(10);
        }
        this.move("Terrain");
        this.pose();
    };
}