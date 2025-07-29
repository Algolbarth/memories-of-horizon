import { Unit } from '../../../Class';
import { Action } from '../Action';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Rappel extends Action {
    name = "Rappel";

    constructor(system) {
        super(system);

        this.init([["Or", 20]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Défausse").cards) {
                if (target == undefined) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.move("Boutique");
        if (target instanceof Unit) {
            target.stat("Vie").current = 1;
        }
        this.move("Défausse");
        this.pose();
    };
}