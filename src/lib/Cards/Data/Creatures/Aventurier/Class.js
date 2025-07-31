import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Aventurier extends Creature {
    name = "Aventurier";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Vie").base = 8;
        this.stat("Vie").current = 8;
        this.stat("Attaque").base = 8;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Créature");
        }
    };

    useEffect = function (choice) {
        let condition = function (card) {
            if (card.type == choice) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, condition);
        this.move("Terrain");
        this.pose();
    };
}