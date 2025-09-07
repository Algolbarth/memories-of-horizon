import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Item';
import { Stat } from '../../../Class/Stat';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Lait extends Objet {
    name = "Lait";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Nourriture");

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && (card.isDamaged() || card.hasDebuff())) {
                return true;
            }
        }
        return false;
    };

    select = function () {
        let check = false;
        for (const card of this.owner.zone("Terrain").cards) {
            if (check == false && card instanceof Creature && (card.isDamaged() || card.hasDebuff())) {
                check = true;
            }
        }

        if (check) {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                let target = undefined;
                let stat = undefined;

                for (const card of this.owner.zone("Terrain").cards) {
                    if (target == undefined && card.type == "Créature" && (card.isDamaged() || card.hasDebuff())) {
                        target = card;
                        if (!card.isDamaged() && card.hasDebuff()) {
                            for (const s of card.stats) {
                                if (s.debuff && s.condition()) {
                                    stat = s;
                                }
                            }
                        }
                    }
                }

                if (target != undefined) {
                    this.useEffect(target, stat);
                }
            }
        }

    };

    useEffect = function (target: Creature, stat: Stat | undefined) {
        this.targeting(target);
        if (!target.isDamaged()) {
            stat.set(stat.min);
        }
        else {
            target.heal(20);
        }
        this.move("Défausse");
        this.pose();
    };
}