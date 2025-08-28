import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Panacee extends Objet {
    name = "Panacée";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

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
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        for (const stat of target.stats) {
            if (stat.debuff) {
                stat.set(stat.min);
            }
        }
        this.move("Défausse");
        this.pose();
    };
}