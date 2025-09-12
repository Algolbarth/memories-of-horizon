import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Item } from '../../../Class/Item';
import Text from './Text.svelte';
import type { Card } from '../../../Class';

export class Sifflet extends Item {
    name = "Sifflet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = () => {
        let condition = (card: Card) => {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, condition);

        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                card.stat("Constitution").increase(1);
                card.stat("Force").increase(1);
            }
        }

        this.move("Défausse");
        this.pose();
    };
}