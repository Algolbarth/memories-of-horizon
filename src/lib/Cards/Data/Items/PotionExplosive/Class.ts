import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PotionExplosive extends Item {
    name = "Potion explosive";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.families.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        target.damageByEffect(this.stat("Infusion").value() * 2);
        this.move("Défausse");
        this.pose();
    };
};