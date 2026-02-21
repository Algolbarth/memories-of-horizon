import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Aventurier extends Creature {
    name = "Aventurier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect("Créature");
        }
    };

    useEffect = (choice: string) => {
        let nb_guild: number = 0;
        for (const card of this.owner().zone("Terrain").cards) {
            if (card.name == "Guilde des aventuriers") {
                nb_guild++;
            }
        }

        let readCondition = (card: Card) => {
            if (card.type == choice) {
                return true;
            }
            return false;
        };
        this.owner().draw(1 + nb_guild, readCondition);

        this.move("Terrain");
        this.pose();
    };
};