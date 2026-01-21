import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Cheval extends Creature {
    name = "Cheval";

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(5);
        this.stat("Force").init(5);
        this.stat("Vitesse").init(1);

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
                this.useEffect(undefined);
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
                this.useEffect(target);
            }
            else {
                this.useEffect(undefined);
            }
        }
    };

    useEffect = (target: Creature | undefined) => {
        if (target != undefined) {
            this.targeting(target);

            target.stat("Vitesse").increase(1);
        }

        this.move("Terrain");
        this.pose();
    };
};