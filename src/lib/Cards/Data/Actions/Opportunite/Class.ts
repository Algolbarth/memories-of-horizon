import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Opportunite extends Action {
    name = "Opportunité";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8]]);

        this.text = Text;
    };

    select = () => {
        if (this.owner().is_player) {
            let target = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect("discover");
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
                this.useEffect("initiative", target);
            }
            else {
                this.useEffect("discover");
            }
        }
    };

    useEffect = (choice: string, target: Creature | undefined = undefined) => {
        if (choice == "initiative" && target != undefined) {
            this.targeting(target);

            target.stat("Initiative").turn += 1;
        }
        else if (choice == "discover") {
            this.owner().discover(1);
        }

        this.move("Défausse");
        this.pose();
    };
};