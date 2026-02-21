import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PeauDEcorce extends Spell {
    name = "Peau d'écorce";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Végétal", 8]]);

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

        if (this.owner().ressource("Mana").total() >= 15) {
            this.owner().ressource("Mana").spend(15);
            target.stat("Constitution").increase(45);
        }
        else {
            target.stat("Constitution").increase(20);
        }

        this.move("Défausse");
        this.pose();
    };
};