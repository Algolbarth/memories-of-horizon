import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class CanonAEau extends Action {
    name = "Canon à eau";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Eau", 25]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    }

    useEffect = function (target: Unit) {
        let value = 100;

        value += 2 * this.owner.ressource("Eau").total();
        this.owner.ressource("Eau").spend(this.owner.ressource("Eau").total());

        target.damageByEffect(value);

        this.move("Défausse");
        this.pose();
    };
}