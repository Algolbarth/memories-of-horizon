import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Vestale extends Creature {
    name = "Vestale";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10], ["Feu", 10]]);

        this.families.base.push("Gobelin");

        this.stat("Constitution").init(3);
        this.stat("Force").init(10);

        this.text = Text;
    };

    select = () => {
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
                this.useEffect(undefined, undefined);
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
                this.useEffect(target, "strenght");
            }
            else {
                this.useEffect(target, undefined);
            }
        }
    };

    useEffect = (target: Creature | undefined, choice: string | undefined) => {
        if (choice == "strenght") {
            target.stat("Force").increase(20);
        }
        else if (choice == "heal") {
            target.heal(20);
        }

        this.move("Terrain");
        this.pose();
    };
};