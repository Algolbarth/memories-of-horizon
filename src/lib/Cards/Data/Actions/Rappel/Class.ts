import { Card, Unit } from '../../../Class';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Rappel extends Action {
    name = "Rappel";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Défausse").cards.length > 0) {
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

            for (const card of this.owner().zone("Défausse").cards) {
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Card) => {
        this.targeting(target);

        target.move("Pile");
        if (target instanceof Unit) {
            target.stat("Santé").init(1);
        }

        this.move("Défausse");
        this.pose();
    };
};