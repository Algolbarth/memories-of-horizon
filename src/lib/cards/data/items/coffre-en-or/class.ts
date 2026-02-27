import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';

export class CoffreEnOr extends Item {
    name = "Coffre en or";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card, drawer: Card) => {
            if (drawer.owner().zone("Pile").level() == card.level) {
                return true;
            }
            return false;
        };
        let cards = this.owner().draw(2, readCondition, this);
        for (const card of cards) {
            card.costReduce(20);
        }

        this.move("Défausse");
        this.pose();
    };
};