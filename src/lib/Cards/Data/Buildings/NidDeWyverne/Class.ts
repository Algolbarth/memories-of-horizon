import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';

export class NidDeWyverne extends Building {
    name = "Nid de wyverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30]]);

        this.initFamily(["Wyverne"]);

        this.stat("Constitution").init(20);

        this.text = Text;
    };

    startPhaseEffect = () => {
        if (this.isArea("Terrain")) {
            let readCondition = (card: Card) => {
                if (card instanceof Creature && card.isFamily("Wyverne")) {
                    return true;
                }
                return false;
            };
            let cards = this.owner().draw(1, readCondition);

            if (cards[0] != undefined) {
                cards[0].costReduce(15);
                cards[0].lock();
            }
        }
    };
};