import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import { Item } from '../../../class/item';
import Text from './text.svelte';
import Use from './use.svelte';

export class NoixDeCoco extends Item {
    name = "Noix de coco";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);

        this.initFamily(["Nourriture", "Plante"]);

        this.text = Text;
    };

    canUse = () => {
        if (this.owner().is_player) {
            for (const entity of [this.owner(), this.adversary()]) {
                for (const card of entity.zone("Terrain").cards) {
                    if (card instanceof Creature && (card.isDamaged() || card.stat("Étourdissement").value() == 0)) {
                        return true;
                    }
                }
            }
        }
        else {
            for (const card of this.owner().zone("Terrain").cards) {
                if (card instanceof Creature && card.isDamaged()) {
                    return true;
                }
            }
            for (const card of this.adversary().zone("Terrain").cards) {
                if (card instanceof Creature && card.stat("Étourdissement").value() == 0) {
                    return true;
                }
            }
        }
        return false;
    };

    canSatiety = () => {
        for (const entity of [this.owner(), this.adversary()]) {
            for (const card of entity.zone("Terrain").cards) {
                if (card instanceof Creature && (card.isFullLife() && card.stat("Étourdissement").value() == 0)) {
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
                if (target == undefined && card instanceof Creature && card.stat("Étourdissement").value() == 0) {
                    target = card;
                }
            }
            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature && card.isDamaged()) {
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
            target.stat("Étourdissement").fix(1);
        }
        else {
            target.heal(40);
        }

        this.move("Défausse");
        this.pose();
    };
};