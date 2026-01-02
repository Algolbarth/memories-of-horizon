import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Intoxication extends Action {
    name = "Intoxication";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature" && card.stat("Poison").value() > 0) {
                return true;
            }
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
                if (target == undefined && card.type == "Créature" && card.stat("Poison").value() > 0) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        target.stat("Toxicité").increase(5);
        this.move("Défausse");
        this.pose();
    };
};