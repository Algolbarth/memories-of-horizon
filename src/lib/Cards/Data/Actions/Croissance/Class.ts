import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Croissance extends Action {
    name = "Croissance";

    constructor(system: System) {
        super(system);

        this.init([["Or", 30], ["Végétal", 30]]);

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
                if (target.isFamily("Plante")) {
                    this.useEffect(target, "life");
                }
                else {
                    this.useEffect(target, "balance");
                }
            }
        }
    };

    useEffect = (target: Creature, choice: string) => {
        this.targeting(target);

        if (choice == "life") {
            target.stat("Constitution").increase(75);
        }
        else if (choice == "balance") {
            target.stat("Force").increase(50);
            target.stat("Constitution").increase(50);
        }

        this.move("Défausse");
        this.pose();
    };
};