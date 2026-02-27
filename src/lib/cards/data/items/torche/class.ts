import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Torche extends Item {
    name = "Torche";

    constructor(system: System) {
        super(system);

        this.init([["Or", 6], ["Feu", 6]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().is_player || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner().is_player) {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("production");
            }
        }
        else {
            this.useEffect("damage", this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (choice: string, target: Unit | undefined = undefined) => {
        if (choice == "production") {
            this.owner().ressource("Feu").increase(2);
        }
        else if (choice == "damage" && target != undefined) {
            this.targeting(target);

            target.damageByEffect(20);
        }

        this.move("Défausse");
        this.pose();
    };
};