import type { System } from '../../../../system/class';
import { Creature } from '../../../class/creature';
import Text from './text.svelte';
import Use from './use.svelte';

export class Reine extends Creature {
    name = "Reine";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.initFamily(["Humain"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    select = () => {
        if (this.owner().is_player) {
            let check = false;

            for (const card of this.owner().zone("Terrain").cards) {
                if (check == false && card instanceof Creature) {
                    check = true;
                }
            }

            if (check) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect();
            }
        }
        else {
            let target = undefined;

            for (const card of this.owner().zone("Terrain").cards) {
                if (target == undefined && card instanceof Creature) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
            else {
                this.useEffect();
            }
        }
    };

    useEffect = (target: Creature | undefined = undefined) => {
        if (target != undefined) {
            this.targeting(target);

            target.stat("Constitution").increase(100);
            target.stat("Force").increase(100);
        }

        this.move("Terrain");
        this.pose();
    };
};