import type { System } from '../../../../system/class';
import type { Card } from '../../../class';
import { Building } from '../../../class/building';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';

export class NidDeWyverne extends Building {
    name = "Nid de wyverne";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Wyverne"]);

        this.stat("Constitution").init(10);

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