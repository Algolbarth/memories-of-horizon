import { Creature } from '../Creature';
import Text from './Text.svelte';

export class Alchimiste extends Creature {
    name = "Alchimiste";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 5;
        this.stat("Vie").current = 5;
        this.stat("Attaque").base = 5;

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card) {
            if (card.familles.total().includes("Potion")) {
                return true;
            }
            return false;
        };
        this.owner.draw(3, condition);
        this.move("Terrain");
        this.pose();
    };
}