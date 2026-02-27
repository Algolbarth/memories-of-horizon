import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class Frappe extends Action {
    name = "Frappe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length == 0) {
            return false;
        }
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && card.stat("Force").value() > 0) {
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

            for (const card of this.adversary().zone("Terrain").cards) {
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        let value: number = 0;

        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature && value < card.stat("Force").value()) {
                value = card.stat("Force").value();
            }
        }

        target.damageByEffect(value);

        this.move("Défausse");
        this.pose();
    };
};