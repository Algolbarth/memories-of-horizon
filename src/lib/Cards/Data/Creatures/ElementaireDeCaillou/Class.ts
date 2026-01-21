import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDeCaillou extends Creature {
    name = "Élémentaire de caillou";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 3]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(2);
        this.stat("Force").init(2);
        this.stat("Endurance").init(1);

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

            target.damageByEffect(5);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }

        this.pose();
    };
};