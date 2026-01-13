import type { System } from '../../../../System/Class';
import { copy } from '../../../../Utils';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Defrichage extends Action {
    name = "Défrichage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 62], ["Végétal", 62]]);

        this.text = Text;
    };

    useEffect = () => {
        this.owner.zone("Terrain").size++;

        let land = copy(this.owner.zone("Terrain").cards);
        for (const card of land) {
            if (card.type == "Créature") {
                card.stat("Constitution").increase(this.owner.zone("Terrain").size);
            }
        }

        this.move("Défausse");
        this.pose();
    };
};