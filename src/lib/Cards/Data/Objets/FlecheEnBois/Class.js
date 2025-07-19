import { Objet } from '../Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class FlecheEnBois extends Objet {
    name = "Flèche en bois";

    constructor(system) {
        super(system);

        this.init([["Or", 5]]);

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
        target.damage(10);
        this.move("Défausse");
        this.pose();
    };
}