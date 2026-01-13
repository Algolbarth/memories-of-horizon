import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Aiguisage extends Action {
    name = "Aiguisage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Réserve").cards) {
            if (card.families.total().includes("Arme")) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Réserve").cards) {
                if (target == undefined && card.families.total().includes("Arme")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Equipment) => {
        target.equipStat("Force").increase(20);
        this.move("Défausse");
        this.pose();
    };
}