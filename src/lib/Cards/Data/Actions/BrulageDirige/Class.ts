import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class BrulageDirige extends Action {
    name = "Brûlage dirigé";

    constructor(system: System) {
        super(system);

        this.init([["Or", 50], ["Feu", 50]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.zone("Terrain").size++;

        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature") {
                card.stat("Force").increase(this.owner.zone("Terrain").size);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};