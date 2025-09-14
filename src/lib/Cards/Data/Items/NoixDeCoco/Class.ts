import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class NoixDeCoco extends Item {
    name = "Noix de coco";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Eau", 10]]);
        this.familles.base.push("Nourriture", "Plante");

        this.text = Text;
    };

    canUse = () => {
        if (this.owner == this.system.game.player) {
            for (const entity of [this.owner, this.owner.adversary()]) {
                for (const card of entity.zone("Terrain").cards) {
                    if (card.type == "Créature" && (card.isDamaged() || card.stat("Étourdissement").value() == 0)) {
                        return true;
                    }
                }
            }
        }
        else {
            for (const card of this.owner.zone("Terrain").cards) {
                if (card.type == "Créature" && card.isDamaged()) {
                    return true;
                }
            }
            for (const card of this.owner.adversary().zone("Terrain").cards) {
                if (card.type == "Créature" && card.stat("Étourdissement").value() == 0) {
                    return true;
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
                if (target == undefined && card.type == "Créature" && card.stat("Étourdissement").value() == 0) {
                    target = card;
                }
            }
            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.isDamaged()) {
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
}