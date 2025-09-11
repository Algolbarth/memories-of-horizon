import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class BulleProtectrice extends Spell {
    name = "Bulle protectrice";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15], ["Eau", 15]]);

        this.text = Text;
    };

    canUse = function () {
        for (const card of this.owner.zone("Terrain").cards) {
            if (card.type == "Créature") {
                return true;
            }
        }
        return false;
    };

    select = function () {
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

    useEffect = function (target: Creature) {
        if (this.owner.ressource("Mana").total() >= 25) {
            this.owner.ressource("Mana").spend(25);
            target.stat("Garde").fix(100);
        }
        else {
            target.stat("Garde").fix(50);
        }
        this.move("Défausse");
        this.pose();
    };
}