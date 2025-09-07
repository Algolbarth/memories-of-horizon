import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Item';
import type { Stat } from '../../../Class/Stat';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Remede extends Objet {
    name = "Remède";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.hasDebuff()) {
                return true;
            }
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.hasDebuff()) {
                    for (const stat of card.stats) {
                        if (stat.debuff && stat.condition()) {
                            target = stat;
                        }
                    }
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (stat: Stat) {
        stat.set(stat.min);
        this.move("Défausse");
        this.pose();
    };
}