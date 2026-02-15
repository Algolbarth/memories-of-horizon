import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeRoche extends Creature {
    name = "Élémentaire de roche";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 60]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(40);
        this.stat("Force").init(40);
        this.stat("Endurance").init(10);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner.zone("Terrain").isNotFull() || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("effect", this.adversary().zone("Terrain").cards[0]);
            }
        }
        else if (this.owner.zone("Terrain").isNotFull()) {
            this.useEffect("creature", undefined);
        }
    };

    useEffect = (choice: string) => {
        if (choice == "creature") {
            this.move("Terrain");
        }
        else if (choice == "effect") {
            let adversary_battlefield = copy(this.adversary().zone("Terrain").cards);
            for (const card of adversary_battlefield) {
                card.damageByEffect(5);
            }
            this.destroy();
        }

        this.pose();
    };
};