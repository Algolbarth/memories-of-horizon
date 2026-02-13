import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';

export class Bestiaire extends Item {
    name = "Bestiaire";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    useEffect = () => {
        let readCondition = (card: Card) => {
            if (card instanceof Creature) {
                return true;
            }
            return false;
        };

        if (this.owner.totalIntelligence() >= 20) {
            this.owner.discover(5, readCondition);
        }
        else {
            this.owner.discover(3, readCondition);
        }

        this.move("Défausse");
        this.pose();
    };
};