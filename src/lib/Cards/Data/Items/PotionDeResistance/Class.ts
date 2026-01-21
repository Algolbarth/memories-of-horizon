import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PotionDeResistance extends Item {
    name = "Potion de résistance";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.initFamily(["Potion"]);

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature) {
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

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        target.stat("Résistance").step += this.stat("Infusion").value() * 2;

        this.move("Défausse");
        this.pose();
    };
};