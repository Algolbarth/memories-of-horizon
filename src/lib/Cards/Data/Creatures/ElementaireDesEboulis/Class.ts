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

        this.stat("Constitution").init(15);
        this.stat("Force").base = 15;
        this.stat("Endurance").base = 5;

        this.text = Text;
    };

    canUse = () => {
        if (!this.owner.zone("Terrain").isFull()) {
            return true;
        }
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (card.type == "Créature" && card.stat("Étourdissement").value() < 1) {
                return true;
            }
        }
        return false
    };

    select = () => {
        let check = false;
        for (const card of this.owner.adversary().zone("Terrain").cards) {
            if (check == false && card.type == "Créature" && card.stat("Étourdissement").value() < 1) {
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

    useEffect = (target: Creature | undefined) => {
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