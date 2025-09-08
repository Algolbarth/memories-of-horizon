import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Aventurier extends Creature {
    name = "Aventurier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Humain");

        this.stat("Santé").base = 8;
        this.stat("Santé").current = 8;
        this.stat("Force").base = 8;

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

    useEffect = function (choice: string) {
        let condition = function (card: Card) {
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