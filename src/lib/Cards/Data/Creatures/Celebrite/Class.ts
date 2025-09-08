import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Celebrite extends Creature {
    name = "Célébrité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        this.move("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.pose();
    };
}