import type { System } from '../../../../System/Class';
import type { Creature } from '../../../Class/Creature';
import { Spell } from '../../../Class/Spell';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PeauDEcorce extends Spell {
    name = "Peau d'écorce";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Végétal", 10]]);

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
        if (this.owner.ressource("Mana").total() >= 15) {
            this.owner.ressource("Mana").spend(15);
            target.stat("Constitution").increase(45);
        }
        else {
            target.stat("Constitution").increase(20);
        }
        this.move("Défausse");
        this.pose();
    };
}