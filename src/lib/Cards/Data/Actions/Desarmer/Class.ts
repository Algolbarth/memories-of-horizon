import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Desarmer extends Action {
    name = "Désarmer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card instanceof Creature) {
                for (const e of card.equipments) {
                    if (e.canDestroy()) {
                        return true;
                    }
                }
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

            for (const card of this.owner.adversary().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    for (const e of card.equipments) {
                        if (e.canDestroy()) {
                            target = card;
                        }
                    }
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        for (const equipment of target.equipments) {
            if (equipment.canDestroy()) {
                equipment.destroy();
            }
        }
        this.move("Défausse");
        this.pose();
    };
}