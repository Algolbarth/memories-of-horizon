import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class MaitreChien extends Creature {
    name = "Maître chien";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        this.move("Terrain");
        this.owner.getCard("Chien").add("Terrain");
        this.owner.getCard("Chien").add("Terrain");
        this.pose();
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain") {
            this.owner.getCard("Chien").add("Terrain");
        }
    };
}