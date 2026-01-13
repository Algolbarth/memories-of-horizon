import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeRoche extends Creature {
    name = "Élémentaire de roche";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 50]]);
        this.families.base.push("Élémentaire");

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
        this.stat("Endurance").init(10);

        this.text = Text;
    };

    canUse = () => {
        if (!this.owner.zone("Terrain").isFull() || this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("creature");
            }
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 5) {
                this.useEffect("effect");
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("creature");
            }
        }
    };

    useEffect = (choice: string) => {
        if (choice == "creature") {
            this.move("Terrain");
        }
        else if (choice == "effect") {
            let adversary_land = copy(this.owner.adversary().zone("Terrain").cards);
            for (const card of adversary_land) {
                card.damageByEffect(5);
            }
            this.destroy();
        }

        this.pose();
    };
};