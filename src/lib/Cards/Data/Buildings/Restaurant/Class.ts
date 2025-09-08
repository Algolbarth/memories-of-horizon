import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import type { Objet } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Restaurant extends Building {
    name = "Restaurant";
    product = undefined;

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);
        this.stat("Santé").base = 10;
        this.stat("Santé").current = 10;

        this.text = Text;
    };

    select = function () {
        let check = undefined;

        for (const card of this.owner.zone("Main").cards) {
            if (check == undefined && card.type == "Objet" && card.familles.total().includes("Nourriture")) {
                check = card;
            }
        }

        if (check != undefined) {
            if (this.owner == this.system.game.player) {
                this.system.game.use.set(this, Use);
            }
            else {
                this.useEffect(check);
            }
        }
        else {
            this.useEffect(undefined);
        }
    };

    useEffect = function (target: Objet | undefined) {
        if (target != undefined) {
            this.product = target.name;
        }
        this.move("Terrain");
        this.pose();
    };

    startStepEffect = function () {
        if (this.zone.name == "Terrain" && this.product != undefined) {
            this.owner.getCard(this.product).add("Main");
        }
    };
}