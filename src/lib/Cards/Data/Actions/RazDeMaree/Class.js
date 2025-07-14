import { copy } from '../../../../Utils';
import { Action } from '../Action.js';
import Text from './Text.svelte';

export class RazDeMaree extends Action {
    name = "Raz-de-marée";

    constructor(system) {
        super(system);

        this.init([["Or", 50], ["Eau", 50]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player || this.owner.adversary().zone("Terrain").cards.length > 0) {
            this.useEffect();
        }
    };

    useEffect = function () {
        let value = 20;
        while (this.owner.ressource("Eau").total() >= 5) {
            this.owner.ressource("Eau").spend(5);
            value++;
        }

        let terrain = copy(this.owner.adversary().zone("Terrain").cards);
        for (const card of terrain) {
            card.damage(value);
        }

        this.move("Défausse");
        this.pose();
    };
}