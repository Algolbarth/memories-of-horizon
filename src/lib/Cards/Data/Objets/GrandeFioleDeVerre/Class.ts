import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class GrandeFioleDeVerre extends Objet {
    name = "Grande fiole de verre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Main").cards) {
            if (card.type == "Objet" && card.familles.total().includes("Potion") && card.name != "Concoction") {
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

            for (const card of this.owner.zone("Main").cards) {
                if (target == undefined && card.type == "Objet" && card.familles.total().includes("Potion") && card.name != "Concoction") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Objet) {
        target.stat("Infusion").add += 25;
        this.move("Défausse");
        this.pose();
    };
}