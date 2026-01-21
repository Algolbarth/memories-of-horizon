import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeTerre extends Creature {
    name = "Élémentaire de terre";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 15]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    canUse = () => {
        if (!this.owner.zone("Terrain").isFull() || this.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
        else {
            if (this.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.adversary().zone("Terrain").cards[0]);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = (target: Unit | undefined) => {
        if (target != undefined) {
            this.targeting(target);

            target.damageByEffect(30);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }

        this.pose();
    };
};