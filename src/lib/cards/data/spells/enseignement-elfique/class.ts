import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import { Spell } from '../../../class/spell';
import Text from './text.svelte';
import Use from './use.svelte';

export class EnseignementElfique extends Spell {
    name = "Enseignement elfique";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);

        this.initFamily(["Elfe"]);

        this.text = Text;
    };

    canUse = () => {
        for (const card of this.owner().zone("Terrain").cards) {
            if (card instanceof Creature) {
                return true;
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

            for (const card of this.owner().zone("Terrain").cards) {
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

        if (this.owner().ressource("Mana").total() >= 25) {
            this.owner().ressource("Mana").spend(25);
            target.stat("Intelligence").increase(10);
        }
        else {
            target.stat("Intelligence").increase(5);
        }

        this.move("Défausse");
        this.pose();
    };
};