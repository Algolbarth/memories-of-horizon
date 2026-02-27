import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Action } from '../../../class/action';
import Text from './text.svelte';
import Use from './use.svelte';

export class Renforcement extends Action {
    name = "Renforcement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.stat("Constitution").increase(15);

        this.move("Défausse");
        this.pose();
    };
};