import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/class';
import { Action } from '$lib/cards/class/action';
import { Creature } from '$lib/cards/class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class BoulePuante extends Action {
    name = "Boule puante";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

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

            for (const card of this.adversary().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.stat("Protection").value() > 0) {
                    return true;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.stat("Protection").decrease(5);

        this.move("Défausse");
        this.pose();
    };
};