import type { System } from '../../../../System/Class';
import type { Unit } from '../../../Class';
import { Sort } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BouleDeFeu extends Sort {
    name = "Boule de feu";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);

        this.text = Text;
    };

    canUse = function () {
        if (this.owner.adversary().zone("Terrain").cards.length > 0) {
            return true;
        }
        return false;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
        }
    };

    useEffect = function (target: Unit) {
        if (this.owner.ressource("Mana").total() >= this.manaCost(15)) {
            this.owner.ressource("Mana").spend(this.manaCost(15));
            target.damageByEffect(60);
        }
        else {
            target.damageByEffect(30);
        }
        this.move("Défausse");
        this.pose();
    };
}