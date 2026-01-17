import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Celebrite extends Creature {
    name = "Célébrité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45]]);

        this.families.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    useEffect = () => {
        this.move("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.pose();
    };
};