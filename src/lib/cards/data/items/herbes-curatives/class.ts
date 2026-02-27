import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class HerbesCuratives extends Item {
    name = "Herbes curatives";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && (card.stat("Poison").value() > 0 || card.stat("Brûlure").value() > 0 || card.stat("Toxicité").value() > 1)) {
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
                if (target == undefined && card instanceof Creature && (card.stat("Poison").value() > 0 || card.stat("Brûlure").value() > 0 || card.stat("Toxicité").value() > 1)) {
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

        target.stat("Poison").set(0);
        target.stat("Toxicité").set(1);
        target.stat("Brûlure").set(0);

        this.move("Défausse");
        this.pose();
    };
};