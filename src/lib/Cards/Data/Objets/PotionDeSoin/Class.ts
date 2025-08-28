import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PotionDeSoin extends Objet {
    name = "Potion de soin";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);
        this.familles.base.push("Potion");

        this.addStat("Infusion", 5);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.isDamaged()) {
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
                if (target == undefined && card.type == "Créature" && card.isDamaged()) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        target.heal(this.stat("Infusion").value() * 2);
        this.move("Défausse");
        this.pose();
    };
}