import { Objet } from '../Objet.js';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Torche extends Objet {
    name = "Torche";

    constructor(system) {
        super(system);

        this.init([["Or", 8], ["Feu", 8]]);

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            if (this.owner.adversary().zone("Terrain").cards.length > 0) {
                this.useEffect(this.owner.adversary().zone("Terrain").cards[0]);
            }
        }
    };

    useEffect = function (target) {
        if (target == undefined) {
            this.owner.ressource("Feu").max += 2;
        }
        else {
            target.damage(20);
        }
        this.move("Défausse");
        this.pose();
    };
}