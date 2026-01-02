import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Spores extends Action {
    name = "Spores";

    constructor(system: System) {
        super(system);

        this.init([["Or", 3], ["Végétal", 2]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature") {
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
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        target.stat("Poison").increase(5);
        this.move("Défausse");
        this.pose();
    };
};