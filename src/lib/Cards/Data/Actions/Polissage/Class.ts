import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Equipment } from '../../../Class/Equipment';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Polissage extends Action {
    name = "Polissage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Réserve").cards) {
            if (card.isFamily("Armure")) {
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
                if (target == undefined && card.isFamily("Armure")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Equipment) => {
        this.targeting(target);

        target.equipStat("Résistance").increase(10);

        this.move("Défausse");
        this.pose();
    };
};