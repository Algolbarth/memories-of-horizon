import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Action } from '../../../Class/Action';
import { Building } from '../../../Class/Building';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Eboulement extends Action {
    name = "Éboulement";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Terre", 10]]);

        this.text = Text;
    };

    canUse = () => {
        if (this.adversary().zone("Terrain").cards.length > 0) {
            return true;
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
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        if (target instanceof Building && target.stat("Étourdissement").value() >= 1) {
            target.damageByEffect(20);
        }
        else {
            target.stat("Étourdissement").fix(1);
        }

        this.move("Défausse");
        this.pose();
    };
};