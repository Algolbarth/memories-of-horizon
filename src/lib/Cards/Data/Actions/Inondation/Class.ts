import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Inondation extends Action {
    name = "Inondation";

    constructor(system: System) {
        super(system);

        this.init([["Or", 20], ["Eau", 20]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Building && card.canDestroy() && !card.elements.total().includes("Eau")) {
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

            for (const card of this.adversary().zone("Terrain").cards) {
                if (target == undefined && card instanceof Building && card.canDestroy() && !card.elements.total().includes("Eau")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Building) => {
        this.targeting(target);

        target.destroy();

        this.move("Défausse");
        this.pose();
    };
};