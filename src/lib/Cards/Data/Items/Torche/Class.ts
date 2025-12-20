import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Torche extends Item {
    name = "Torche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner == this.system.game.player || this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Creature | undefined) => {
        if (target == undefined) {
            this.owner.ressource("Feu").production += 2;
        }
        else {
            target.damageByEffect(20);
        }
        this.move("Défausse");
        this.pose();
    };
}