import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class TremblementDeTerre extends Action {
    name = "Tremblement de terre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Terre", 12]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.adversary().zone("Terrain").cards.length > 0 || (this.owner == this.system.game.player && this.owner.zone("Terrain").cards.length > 0)) {
            return true;
        }
        return false;
    };

    useEffect = () => {
        let land = copy(this.owner.zone("Terrain").cards);
        let adversary_land = copy(this.owner.adversary().zone("Terrain").cards);
        let double_land = land.concat(adversary_land);

        for (const card of double_land) {
            card.damageByEffect(10);
        }

        this.move("Défausse");
        this.pose();
    };
};