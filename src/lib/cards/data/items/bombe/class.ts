import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Bombe extends Item {
    name = "Bombe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.damageByEffect(50);

        this.move("Défausse");
        this.pose();
    };
};