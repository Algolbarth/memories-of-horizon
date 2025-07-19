import { Objet } from '../Objet';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class PommeDeTerre extends Objet {
    name = "Pomme de terre";

    constructor(system) {
        super(system);

        this.init([["Or", 4], ["Terre", 4]]);
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
            target.stat("Défense").add += 5;
        }
        else {
            target.heal(10);
        }
        this.move("Défausse");
        this.pose();
    };
}