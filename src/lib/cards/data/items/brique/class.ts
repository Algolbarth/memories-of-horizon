import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Building } from '../../../class/building';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Brique extends Item {
    name = "Brique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6], ["Terre", 6]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Building && card.isDamaged()) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect("damage", this.adversary().zone("Terrain").cards[0]);
            }
            else {
                let target = undefined;
                for (const card of this.owner().zone("Terrain").cards) {
                    if (target == undefined && card instanceof Building && card.isDamaged()) {
                        target = card;
                    }
                }
                if (target != undefined) {
                    this.useEffect("heal", target);
                }
            }
        }
    };

    useEffect = (choice: string, target: Unit) => {
        this.targeting(target);

        if (choice == "heal") {
            target.heal(20);
        }
        else if (choice == "damage") {
            target.damageByEffect(20);
        }

        this.move("Défausse");
        this.pose();
    };
};