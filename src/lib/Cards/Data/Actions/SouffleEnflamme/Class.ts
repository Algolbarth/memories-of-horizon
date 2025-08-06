import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class SouffleEnflamme extends Action {
    name = "Souffle enflammé";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Feu", 15]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = function (target: Unit) {
        target.damage(20);
        if (target.slot && target.zone) {
            if (target.slot > 0) {
                target.zone.cards[target.slot - 1].damage(20);
            }
            if (target.slot < target.zone.cards.length - 1) {
                target.zone.cards[target.slot + 1].damage(20);
            }
        }

        this.move("Défausse");
        this.pose();
    };
}