import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import type { Stat } from '../../../class/stat';
import Text from './text.svelte';
import Use from './use.svelte';

export class Remede extends Item {
    name = "Remède";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.hasDebuff()) {
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
            let debuff = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.hasDebuff()) {
                    for (const stat of card.stats) {
                        if (stat.debuff && stat.condition()) {
                            target = card;
                            debuff = stat;
                        }
                    }
                }
            }

            if (target != undefined && debuff != undefined) {
                this.useEffect(target, debuff);
            }
        }
    };

    useEffect = (target: Unit, stat: Stat) => {
        this.targeting(target);

        stat.set(stat.min);

        this.move("Défausse");
        this.pose();
    };
};