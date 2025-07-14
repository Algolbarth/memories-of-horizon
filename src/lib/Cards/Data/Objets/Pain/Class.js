import { Objet } from '../Objet.js';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Pain extends Objet {
    name = "Pain";

    constructor(system) {
        super(system);

        this.init([["Or", 8]]);
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
            target.owner.ressource("Or").max++;
        }
        else {
            target.heal(10);
        }
        this.move("Défausse");
        this.pose();
    };
}