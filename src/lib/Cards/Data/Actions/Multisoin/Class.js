import { copy } from '../../../../Utils';
import { Action } from '../Action';
import Text from './Text.svelte';

export class Multisoin extends Action {
    name = "Multisoin";

    constructor(system) {
        super(system);

        this.init([["Or", 25]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.useEffect();
        }
        else {
            let check = false;

            for (const card of this.owner.zone("Terrain").cards) {
                if (check == undefined && card.type == "Créature" && card.isDamaged()) {
                    check = true;
                }
            }

            if (check) {
                this.useEffect();
            }
        }
    };

    useEffect = function () {
        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature") {
                card.heal(5);
            }
        }
        this.move("Défausse");
        this.pose();
    };
}