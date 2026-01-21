import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';

export class Sifflet extends Item {
    name = "Sifflet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card) => {
            if (card instanceof Creature && card.isFamily("Bête")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, read_condition);

        let battlefield = copy(this.owner.zone("Terrain").cards);
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