import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import type { Creature } from '../../../Class/Creature';
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
            if (card.type == "Créature") {
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
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "endurance");
            }
        }
    };

    useEffect = (target: Creature, choice: string) => {
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