import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ChevalDeGuerre extends Creature {
    name = "Cheval de guerre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 40]]);
        this.familles.base.push("Bête");

        this.stat("Constitution").init(10);
        this.stat("Force").base = 10;
        this.stat("Vitesse").base = 1;

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const card of this.owner.zone("Terrain").cards) {
                if (check == false && card.type == "Créature") {
                    check = true;
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(undefined);
            }
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
            else {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = function (target: Creature) {
        if (target != undefined) {
            target.stat("Santé").increase(10);
            target.stat("Santé").increase(10);
            target.stat("Force").increase(10);
            target.stat("Vitesse").increase(1);
        }
        this.move("Terrain");
        this.pose();
    };
}