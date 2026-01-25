import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Pretre extends Creature {
    name = "Prêtre";

    constructor(system: System) {
        super(system);

        this.init([["Or", 15]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const card of this.owner.zone("Terrain").cards) {
                if (check == false && card instanceof Creature) {
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
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target, "life");
            }
            else {
                this.useEffect(target, undefined);
            }
        }
    };

    useEffect = (target: Creature | undefined, choice: string | undefined) => {
        if (target != undefined) {
            this.targeting(target);

            if (choice == "life") {
                target.stat("Constitution").increase(15);
            }
            else if (choice == "heal") {
                target.heal(20);
            }
        }

        this.move("Terrain");
        this.pose();
    };
};