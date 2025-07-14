import { Action } from '../Action.js';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Metamorphose extends Action {
    name = "Métamorphose";

    constructor(system) {
        super(system);

        this.init([["Or", 10]]);
        this.familles.base.push("Druide");

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature" && card.familles.total().includes("Druide")) {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        target.transform(target.otherForm);
        this.move("Défausse");
        this.pose();
    };
}