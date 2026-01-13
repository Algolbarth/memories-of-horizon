import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class CoffreEnOr extends Item {
    name = "Coffre en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = () => {
        let read_condition = (card: Card, drawer: Card) => {
            if (drawer.owner?.zone("Pile").level() == card.level) {
                return true;
            }
            return false;
        };
        let cards = this.owner.draw(2, read_condition, this);
        for (const card of cards) {
            card.costReduce(20);
        }

        this.move("Défausse");
        this.pose();
    };
};