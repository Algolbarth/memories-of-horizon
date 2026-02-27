import { copy } from '../../../../utils';
import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import type { Card } from '../../../class';
import { Creature } from '../../../class/creature';

export class Sifflet extends Item {
    name = "Sifflet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Bête")) {
                return true;
            }
            return false;
        };
        this.owner().draw(1, readCondition);

        let battlefield = copy(this.owner().zone("Terrain").cards);
        for (const card of battlefield) {
            if (card instanceof Creature && card.isFamily("Bête")) {
                card.stat("Constitution").increase(1);
                card.stat("Force").increase(1);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};