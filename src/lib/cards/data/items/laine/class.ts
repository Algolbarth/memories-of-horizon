import type { Card, Unit } from '$lib/cards/class';
import type { System } from '../../../../system/class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Laine extends Item {
    name = "Laine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        target.stat("Endurance").increase(5);
        target.stat("Résistance").increase(5);

        this.move("Défausse");
        this.pose();
    };
};