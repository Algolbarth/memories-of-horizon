import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Action } from '../../../class/action';
import Text from './text.svelte';
import Use from './use.svelte';

export class Vulnerabilite extends Action {
    name = "Vulnérabilité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card.stat("Résistance").value() > 0) {
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

            for (const card of this.adversary().zone("Terrain").cards) {
                if (target == undefined && card.stat("Résistance").value() > 0) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.stat("Résistance").decrease(20);

        this.move("Défausse");
        this.pose();
    };
};