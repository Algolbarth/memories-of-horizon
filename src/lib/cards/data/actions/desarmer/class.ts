import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class Desarmer extends Action {
    name = "Désarmer";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.adversary().zone("Terrain").cards) {
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
        if (this.owner().is_player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.adversary().zone("Terrain").cards) {
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
        this.targeting(target);

        for (const equipment of target.equipments) {
            if (equipment.canDestroy()) {
                equipment.destroy();
            }
        }

        this.move("Défausse");
        this.pose();
    };
};