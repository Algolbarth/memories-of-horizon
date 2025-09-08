import { Card, Unit } from '../../../Class';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Rappel extends Action {
    name = "Rappel";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.zone("Défausse").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Défausse").cards) {
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Card) {
        target.move("Boutique");
        if (target instanceof Unit) {
            target.stat("Santé").current = 1;
        }
        this.move("Défausse");
        this.pose();
    };
}