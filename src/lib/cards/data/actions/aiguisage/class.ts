import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import type { Equipment } from '../../../class/equipment';
import Text from './text.svelte';
import Use from './use.svelte';

export class Aiguisage extends Action {
    name = "Aiguisage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Inventaire").cards) {
            if (card.isFamily("Arme")) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Inventaire").cards) {
                if (target == undefined && card.isFamily("Arme")) {
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

        target.equipStat("Force").increase(20);

        this.move("Défausse");
        this.pose();
    };
};