import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Biere extends Item {
    name = "Bière";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.initFamily(["Nourriture"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card instanceof Creature && (card.isDamaged() || card.stat("Critique").value() < 100)) {
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
                if (target == undefined && card instanceof Creature && (card.isDamaged() || card.stat("Critique").value() < 100)) {
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

        if (!target.isDamaged()) {
            target.stat("Critique").increase(50);
            if (target.stat("Critique").value() > 100) {
                target.stat("Critique").set(100);
            }
        }
        else {
            target.heal(20);
        }

        this.move("Défausse");
        this.pose();
    };
};