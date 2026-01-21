import type { System } from '../../../../System/Class';
import { Creature } from '../../../Class/Creature';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class MontureDeChevalier extends Creature {
    name = "Monture de chevalier";

    constructor(system: System) {
        super(system);

        this.init([["Or", 110]]);

        this.initFamily(["Bête"]);

        this.stat("Constitution").init(10);
        this.stat("Force").init(10);

        this.text = Text;
    };

    select = () => {
        if (this.owner == this.system.game.player) {
            let check = false;

            for (const card of this.owner.zone("Terrain").cards) {
                if (check == false && card instanceof Creature && card.isFamily("Chevalier") && !card.mounted) {
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
                if (target == undefined && card instanceof Creature && card.isFamily("Chevalier") && !card.mounted) {
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

    useEffect = (target: Creature) => {
        if (target != undefined) {
            this.targeting(target);

            target.move("Réserve");
            target.transform(target.otherForm);
        }

        this.move("Terrain");
        this.pose();
    };
};