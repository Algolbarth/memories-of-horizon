import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Celebrite extends Creature {
    name = "Célébrité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 45]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        this.move("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.owner.getCard("Garde").add("Terrain");
        this.pose();
    };
}