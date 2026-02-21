import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Building } from '../../../Class/Building';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import Use from './Use.svelte';

export class Restaurant extends Building {
    name = "Restaurant";
    product: string | undefined = undefined;

    constructor(system: System) {
        super(system);

        this.init([["Or", 25]]);

        this.stat("Constitution").init(10);

        this.text = Text;
    };

    select = () => {
        let check = undefined;

        for (const card of this.owner().zone("Inventaire").cards) {
            if (check == undefined && card instanceof Item && card.isFamily("Nourriture") && card.level <= 2) {
                check = card;
            }
        }

        if (check != undefined) {
            if (this.owner().is_player) {
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

    startPhaseEffect = () => {
        if (this.isArea("Terrain") && this.product != undefined) {
            this.owner().getCard(this.product).add("Inventaire");
        }
    };
};