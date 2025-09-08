import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Hydratation extends Action {
    name = "Hydratation";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Eau", 8]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature" && card.elements.total().includes("Eau")) {
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
                if (target == undefined && card.type == "Créature" && card.elements.total().includes("Eau")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Creature) {
        let value = 15;

        if (this.owner.ressource("Eau").total() >= 15) {
            this.owner.ressource("Eau").spend(15);
            value = 30;
        }

        target.stat("Santé").add += value;
        target.stat("Santé").current += value;
        target.stat("Force").add += value;

        this.move("Défausse");
        this.pose();
    };
}