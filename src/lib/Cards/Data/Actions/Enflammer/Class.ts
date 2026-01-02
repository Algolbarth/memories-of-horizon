import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Enflammer extends Action {
    name = "Enflammer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5], ["Feu", 5]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        target.stat("Brûlure").increase(5);
        this.move("Défausse");
        this.pose();
    };
};