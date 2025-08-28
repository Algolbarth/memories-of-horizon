import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Biere extends Objet {
    name = "Bière";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Nourriture");

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && (card.isDamaged() || card.stat("Critique").current < 100)) {
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
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        this.targeting(target);
        if (!target.isDamaged()) {
            target.stat("Critique").current += 50;
            if (target.stat("Critique").current > 100) {
                target.stat("Critique").current = 100;
            }
        }
        else {
            target.heal(20);
        }
        this.move("Défausse");
        this.pose();
    };
}