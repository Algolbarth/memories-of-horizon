import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class TheVert extends Item {
    name = "Thé vert";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);
        this.familles.base.push("Nourriture");
        this.familles.base.push("Plante");

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
                this.useEffect(target);
            }
        }
    };

    useEffect = (target: Creature) => {
        this.targeting(target);
        if (!target.isDamaged()) {
            target.stat("Intelligence").increase(2);
        }
        else {
            target.heal(20);
        }
        this.move("Défausse");
        this.pose();
    };
}