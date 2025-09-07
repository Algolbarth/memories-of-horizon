import { copy } from '../../../../Utils';
import type { System } from '../../../../System/Class';
import { Objet } from '../../../Class/Item';
import Text from './Text.svelte';
import type { Card } from '../../../Class';

export class Sifflet extends Objet {
    name = "Sifflet";

    constructor(system: System) {
        super(system);

        this.init([["Or", 10]]);

        this.text = Text;
    };

    useEffect = function () {
        let condition = function (card: Card) {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                return true;
            }
            return false;
        };
        this.owner.draw(1, condition);

        let terrain = copy(this.owner.zone("Terrain").cards);
        for (const card of terrain) {
            if (card.type == "Créature" && card.familles.total().includes("Bête")) {
                card.stat("Attaque").add += 1;
                card.stat("Vie").current += 1;
                card.stat("Vie").add += 1;
            }
        }

        this.move("Défausse");
        this.pose();
    };
}