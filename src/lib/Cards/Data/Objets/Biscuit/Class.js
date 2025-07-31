import { Objet } from '../../../Class/Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Biscuit extends Objet {
    name = "Biscuit";

    constructor(system) {
        super(system);

        this.init([["Or", 15]]);
        this.familles.base.push("Nourriture");

        this.text = Text;
    };

    select = function () {
        if (this.owner == this.system.game.player) {
            this.system.game.use.set(this, Use);
        }
        else {
            let target = undefined;

            for (const card of this.owner.zone("Terrain").cards) {
                if (target == undefined && card.type == "Créature") {
                    target = card;
                }
            }

            if (target != undefined) {
                this.useEffect(target);
            }
        }
    };

    useEffect = function (target) {
        this.targeting(target);
        if (target.stat("Vie").current == target.stat("Vie").value()) {
            this.owner.getCard("Bonhomme biscuit").add("Terrain");
        }
        else {
            target.heal(25);
        }
        this.move("Défausse");
        this.pose();
    };
}