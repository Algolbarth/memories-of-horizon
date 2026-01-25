import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

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
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Building && card.isDamaged()) {
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
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.adversary().zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = (target: Unit, choice: string) => {
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