import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BouleDeFeu extends Spell {
    name = "Boule de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);

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
            this.useEffect(this.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = (target: Unit) => {
        this.targeting(target);

        if (this.owner().ressource("Mana").total() >= 15) {
            this.owner().ressource("Mana").spend(15);
            target.damageByEffect(60);
        }
        else {
            target.damageByEffect(30);
        }

        this.move("Défausse");
        this.pose();
    };
};