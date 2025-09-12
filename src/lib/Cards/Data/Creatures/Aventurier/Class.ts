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

        this.stat("Constitution").init(8);
        this.stat("Force").init(8);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Créature");
        }
    };

    useEffect = (choice: string) => {
        let condition = (card: Card) => {
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