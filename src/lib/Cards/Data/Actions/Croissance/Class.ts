import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Croissance extends Action {
    name = "Croissance";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25], ["Végétal", 25]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature") {
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
                if (target.familles.total().includes("Plante")) {
                    this.useEffect(target, "life");
                }
                else {
                    this.useEffect(target, "balance");
                }
            }
        }
    };

    useEffect = function (target: Creature, choice: string) {
        if (choice == "life") {
            target.stat("Santé").increase(75);
            target.stat("Santé").current += 75;
        }
        else if (choice == "balance") {
            target.stat("Force").increase(50);
            target.stat("Santé").increase(50);
            target.stat("Santé").current += 50;
        }

        this.move("Défausse");
        this.pose();
    };
}