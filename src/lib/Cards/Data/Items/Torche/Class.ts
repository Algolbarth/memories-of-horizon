import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Torche extends Item {
    name = "Torche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6], ["Feu", 6]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner == this.system.game.player || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (choice: string, target: Creature | undefined) => {
        if (choice == "production") {
            this.owner.ressource("Feu").production += 2;
        }
        else if (choice == "damage" && target != undefined) {
            this.targeting(target);

            target.damageByEffect(20);
        }

        this.move("Défausse");
        this.pose();
    };
};