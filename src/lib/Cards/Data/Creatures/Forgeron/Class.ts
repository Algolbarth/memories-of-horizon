import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class Forgeron extends Creature {
    name = "Forgeron";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.familles.total().includes("Équipement")) {
                return true;
            }
            return false;
        };
        this.owner.draw(3, condition);
        this.move("Terrain");
        this.pose();
    };
}