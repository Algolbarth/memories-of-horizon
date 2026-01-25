import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDesEboulis extends Creature {
    name = "Élémentaire des éboulis";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 25]]);

        this.initFamily(["Élémentaire"]);

        this.stat("Constitution").init(15);
        this.stat("Force").init(15);
        this.stat("Endurance").init(5);

        this.text = Text;
    };

    canUse = () => {
        if (!this.owner.zone("Terrain").isFull()) {
            return true;
        }
        for (const card of this.adversary().zone("Terrain").cards) {
            if (card instanceof Creature && card.stat("Étourdissement").value() < 1) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        let check = false;
        for (const card of this.adversary().zone("Terrain").cards) {
            if (check == false && card instanceof Creature && card.stat("Étourdissement").value() < 1) {
                check = true;
            }
        }

        if (this.owner == this.system.game.player) {
            if (check) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("creature", undefined);
            }
        }
        else {
            if (check) {
                let target = undefined;
                for (const card of this.adversary().zone("Terrain").cards) {
                    if (target == undefined && card instanceof Creature) {
                        target = card;
                    }
                }
                this.useEffect("stun", target);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect("creature", undefined);
            }
        }
    };

    useEffect = (choice: string, target: Creature | undefined) => {
        if (choice == "creature") {
            this.move("Terrain");
        }
        else if (choice == "effect" && target != undefined) {
            this.targeting(target);

            target.stat("Étourdissement").fix(1);

            this.destroy();
        }

        this.pose();
    };
};