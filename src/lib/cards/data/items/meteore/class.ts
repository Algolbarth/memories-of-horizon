import type { System } from '../../../../system/class';
import type { Unit } from '../../../class';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class Meteore extends Item {
    name = "Météore";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12]]);

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
                this.useEffect("stockage");
            }
        }
        else {
            this.useEffect("damage", this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (choice: string, target: Unit | undefined = undefined) => {
        if (choice == "stockage") {
            this.owner().ressource("Flux").stock(1);
        }
        else if (choice == "damage" && target != undefined) {
            this.targeting(target);

            target.damageByEffect(20);
        }

        this.move("Défausse");
        this.pose();
    };
};