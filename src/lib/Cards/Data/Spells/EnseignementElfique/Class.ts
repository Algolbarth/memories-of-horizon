import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class EnseignementElfique extends Spell {
    name = "Enseignement elfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Végétal", 15]]);
        this.families.base.push("Elfe");

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
        if (this.owner.ressource("Mana").total() >= 25) {
            this.owner.ressource("Mana").spend(25);
            target.stat("Intelligence").increase(10);
        }
        else {
            target.stat("Intelligence").increase(5);
        }
        this.move("Défausse");
        this.pose();
    };
}