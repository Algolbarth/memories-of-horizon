import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeCaillou extends Creature {
    name = "Élémentaire de caillou";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 4]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(2);
        this.stat("Force").init(2);
        this.stat("Endurance").init(1);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().zone("Terrain").isNotFull() || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            if (this.owner().is_player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("effect", this.adversary().zone("Terrain").cards[0]);
            }
        }
        else if (this.owner().zone("Terrain").isNotFull()) {
            this.useEffect("creature", undefined);
        }
    };

    useEffect = (choice: string, target: Unit | undefined) => {
        if (choice == "creature") {
            this.move("Terrain");
        }
        else if (choice == "effect" && target != undefined) {
            this.targeting(target);

            target.damageByEffect(5);
            this.destroy();
        }

        this.pose();
    };
};