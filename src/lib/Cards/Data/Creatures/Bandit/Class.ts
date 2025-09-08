import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Bandit extends Creature {
    name = "Bandit";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 5;
        this.stat("Santé").current = 5;
        this.stat("Force").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        if (this.owner.ressource("Or").total() >= 5) {
            this.owner.ressource("Or").spend(5);
            this.stat("Force").increase(5);
            this.stat("Santé").increase(5);
            this.stat("Santé").current += 5;
        }
        this.move("Terrain");
        this.pose();
    };
}