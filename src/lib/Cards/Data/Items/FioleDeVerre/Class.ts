import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class FioleDeVerre extends Item {
    name = "Fiole de verre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 5]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Réserve").cards) {
            if (card.type == "Objet" && card.families.total().includes("Potion") && card.name != "Concoction") {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Réserve").cards) {
                if (target == undefined && card.type == "Objet" && card.families.total().includes("Potion") && card.name != "Concoction") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Item) => {
        target.stat("Infusion").increase(5);
        this.move("Défausse");
        this.pose();
    };
}