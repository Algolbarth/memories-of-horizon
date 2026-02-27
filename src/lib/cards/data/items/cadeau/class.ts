import type { Card } from '$lib/cards/class';
import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Cadeau extends Item {
    name = "Cadeau";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        let readCondition = (card: Card, drawer: Card) => {
            if (target.level == card.level) {
                return true;
            }
            return false;
        };
        this.owner().draw(5, readCondition, this);

        this.move("Défausse");
        this.pose();
    };
};