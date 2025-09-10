import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Juge extends Creature {
    name = "Juge";

    constructor(system: System) {
        super(system);

        this.init([["Or", 105]]);
        this.familles.base.push("Humain");

        this.stat("Constitution").init(5);
        this.stat("Force").base = 5;

        this.text = Text;
    };

    select = function () {
        let check = false;

        for (const entity of [this.owner, this.owner.adversary()]) {
            for (const card of entity.zone("Terrain").cards) {
                if (check == false && card.type == "Créature") {
                    check = true;
                }
            }
        }

        if (check) {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                let target = undefined;

                for (const card of this.owner.adversary().zone("Terrain").cards) {
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
        }
        else {
            this.useEffect(undefined);
        }
    };

    useEffect = function (target: Creature) {
        if (target != undefined) {
            let max_protection = 0;
            for (const entity of [this.owner, this.owner.adversary()]) {
                for (const card of entity.zone("Terrain").cards) {
                    if (card.stat("Protection").value() > max_protection) {
                        max_protection = card.stat("Protection").value();
                    }
                }
            }

            target.stat("Protection").set(max_protection + 1);
        }
        this.move("Terrain");
        this.pose();
    };
}