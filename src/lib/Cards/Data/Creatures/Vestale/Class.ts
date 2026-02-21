import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Vestale extends Creature {
    name = "Vestale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);

        this.initFamily(["Gobelin"]);

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;
    };

    select = () => {
        if (this.owner().is_player) {
            let check = false;

            for (const card of this.owner().zone("Terrain").cards) {
                if (check == false && card instanceof Creature) {
                    check = true;
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined, undefined);
            }
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "strength");
            }
            else {
                this.useEffect(target, undefined);
            }
        }
    };

    useEffect = (target: Creature | undefined, choice: string | undefined) => {
        if (target != undefined) {
            this.targeting(target);

            if (choice == "strength") {
                target.stat("Force").increase(20);
            }
            else if (choice == "heal") {
                target.heal(20);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};