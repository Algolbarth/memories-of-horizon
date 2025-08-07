import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class ElementaireDesEboulis extends Creature {
    name = "Élémentaire des éboulis";

    constructor(system: System) {
        super(system);

        this.init([["Terre", 20]]);
        this.familles.base.push("Élémentaire");

        this.stat("Vie").base = 15;
        this.stat("Vie").current = 15;
        this.stat("Attaque").base = 15;
        this.stat("Défense").base = 5;

        this.text = Text;
    };

    use = function () {
        this.select();
    };

    select = function () {
        let check = false;
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (check == false && card.type == "Créature") {
                check = true;
            }
        }

        if (this.owner == this.system.game.player) {
            if (check) {
                this.system.game.use.set(this, Use);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
        else {
            if (check) {
                let target = undefined;
                for (const card of this.owner.adversary().zone("Terrain").cards) {
                    if (target == undefined && card.type == "Créature") {
                        target = card;
                    }
                }
                this.useEffect(target);
            }
            else if (!this.owner.zone("Terrain").isFull()) {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = function (target: Creature | undefined) {
        if (target != undefined) {
            target.stat("Étourdissement").fix(1);
            this.destroy();
        }
        else {
            this.move("Terrain");
        }
        this.pose();
    };
}