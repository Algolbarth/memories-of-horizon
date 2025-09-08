import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Brique extends Item {
    name = "Brique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Terre", 8]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Bâtiment" && card.isDamaged()) {
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
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = function (target: Unit, choice: string) {
        if (choice == "heal") {
            target.heal(20);
        }
        else {
            target.damageByEffect(20);
        }
        this.move("Défausse");
        this.pose();
    };
}