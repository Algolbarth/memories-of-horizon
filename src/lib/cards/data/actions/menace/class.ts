import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/class';
import { Action } from '$lib/cards/class/action';
import Text from './text.svelte';
import Use from './use.svelte';

export class Menace extends Action {
    name = "Menace";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0 || (this.owner().is_player && this.owner().zone("Terrain").cards.length > 0)) {
            return true;
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

        target.stat("Protection").increase(5);

        this.move("Défausse");
        this.pose();
    };
};