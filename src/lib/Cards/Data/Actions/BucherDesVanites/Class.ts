import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import type { Unit } from '../../../Class';
import Use from './Use.svelte';

export class BucherDesVanites extends Action {
    name = "Bûcher des vanités";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.zone("Pile").cards.length > 0 && this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.adversary().zone("Terrain").cards) {
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
        let value = 0;

        let stack = copy(this.owner.zone("Pile").cards);
        for (const card of stack) {
            card.destroy();
            value++;
        }

        target.damageByEffect(10 * value);

        this.move("Défausse");
        this.pose();
    };
};