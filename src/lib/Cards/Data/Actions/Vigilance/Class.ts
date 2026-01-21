import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Vigilance extends Action {
    name = "Vigilance";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
            }
        }
        return false;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "endurance");
            }
        }
    };

    useEffect = (target: Creature, choice: string) => {
        this.targeting(target);

        if (choice == "endurance") {
            target.stat("Endurance").increase(10);
        }
        else if (choice == "résistance") {
            target.stat("Résistance").increase(10);
        }

        this.move("Défausse");
        this.pose();
    };
};