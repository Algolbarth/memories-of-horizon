import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class FioleDeCristal extends Item {
    name = "Fiole de cristal";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Réserve").cards) {
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

            for (const card of this.owner.zone("Réserve").cards) {
                if (target == undefined && card.type == "Objet" && card.familles.total().includes("Potion") && card.name != "Concoction") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target: Item) {
        target.stat("Infusion").increase(25);
        this.move("Défausse");
        this.pose();
    };
}