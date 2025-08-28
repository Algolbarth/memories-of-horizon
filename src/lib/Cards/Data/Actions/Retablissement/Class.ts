import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Retablissement extends Action {
    name = "Rétablissement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.isDamaged()) {
                return true;
            }
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.isDamaged()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Unit) {
        target.fullHeal();
        this.move("Défausse");
        this.pose();
    };
}