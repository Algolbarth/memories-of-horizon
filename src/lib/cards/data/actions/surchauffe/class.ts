import type { System } from '../../../../system/class';
import { Action } from '../../../class/action';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class Surchauffe extends Action {
    name = "Surchauffe";

    constructor(system: System) {
        super(system);

        this.init([["Or", 12], ["Feu", 12]]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
            }
        }
        if (this.owner().is_player) {
            for (const card of this.adversary().zone("Terrain").cards) {
                if (card instanceof Creature) {
                    return true;
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
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);

        target.stat("Force").increase(100);
        target.damageByEffect(100);

        this.move("Défausse");
        this.pose();
    };
};