import type { System } from '../../../../System/Class';
import { Building } from '../../../Class/Building';
import type { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Restaurant extends Building {
    name = "Restaurant";
    product = undefined;

    constructor(system: System) {
        super(system);

        this.init([["Or", 35]]);
        this.stat("Constitution").init(10);

        this.text = Text;
    };

    select = () => {
        let check = undefined;

        for (const card of this.owner.zone("Réserve").cards) {
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

    useEffect = (target: Item | undefined) => {
        if (target != undefined) {
            this.product = target.name;
        }
        this.move("Terrain");
        this.pose();
    };

    startStepEffect = () => {
        if (this.zone.name == "Terrain" && this.product != undefined) {
            this.owner.getCard(this.product).add("Réserve");
        }
    };
}