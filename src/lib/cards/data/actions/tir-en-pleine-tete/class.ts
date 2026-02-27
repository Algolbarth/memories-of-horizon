import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class TirEnPleineTete extends Action {
    name = "Tir en pleine tête";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.stat("Protection").value() > 0) {
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

            for (const card of this.owner().adversary().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.stat("Protection").value() > 0) {
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

        target.damage(target.stat("Protection").value() * 10);

        this.move("Défausse");
        this.pose();
    };
};