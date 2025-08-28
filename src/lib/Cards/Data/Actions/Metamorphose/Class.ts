import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Metamorphose extends Action {
    name = "Métamorphose";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.familles.total().includes("Druide")) {
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
                if (target == undefined && card.type == "Créature" && card.familles.total().includes("Druide")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        target.transform(target.otherForm);
        this.move("Défausse");
        this.pose();
    };
}