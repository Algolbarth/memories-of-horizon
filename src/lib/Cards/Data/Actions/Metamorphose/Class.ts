import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Metamorphose extends Action {
    name = "Métamorphose";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Druide"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && card.isFamily("Druide")) {
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
                if (target == undefined && card instanceof Creature && card.isFamily("Druide")) {
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

        target.transform(target.otherForm);

        this.move("Défausse");
        this.pose();
    };
};