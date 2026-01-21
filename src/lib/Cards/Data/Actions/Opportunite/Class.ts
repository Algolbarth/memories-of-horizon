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
        if (this.owner == this.system.game.player) {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature | undefined) => {
        if (target != undefined) {
            this.targeting(target);

            target.stat("Initiative").step += 1;
        }
        else {
            this.owner.discover(1);
        }

        this.move("Défausse");
        this.pose();
    };
};