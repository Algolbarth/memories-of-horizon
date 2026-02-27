import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class PotionExplosive extends Item {
    name = "Potion explosive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Potion"]);

        this.addStat("Infusion", 5);

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

        target.damageByEffect(this.stat("Infusion").value() * 2);

        this.move("Défausse");
        this.pose();
    };
};