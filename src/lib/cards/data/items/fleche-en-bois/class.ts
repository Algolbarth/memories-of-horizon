import type { System } from '$lib/system/class';
import type { Unit } from '$lib/cards/class/class';
import { Item } from '$lib/cards/class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class FlecheEnBois extends Item {
    name = "Flèche en bois";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

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

        target.damageByEffect(10);

        this.move("Défausse");
        this.pose();
    };
};