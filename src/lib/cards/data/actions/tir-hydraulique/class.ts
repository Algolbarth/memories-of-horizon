import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Action } from '../../../class/action';
import Text from './text.svelte';
import Use from './use.svelte';

export class TirHydraulique extends Action {
    name = "Tir hydraulique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        if (this.owner().ressource("Eau").total() >= 15) {
            this.owner().ressource("Eau").spend(15);
            target.damageByEffect(60);
        }
        else {
            target.damageByEffect(30);
        }

        this.move("Défausse");
        this.pose();
    };
};