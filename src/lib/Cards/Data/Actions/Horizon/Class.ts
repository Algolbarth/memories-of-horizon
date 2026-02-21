import type { System } from '../../../../System/Class';
import type { Card } from '../../../Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Horizon extends Action {
    name = "Horizon";

    constructor(system: System) {
        super(system);

        this.init([["Or", 300]]);

        this.text = Text;
    };

    otherPoseEffect = (card: Card) => {
        if (this.isArea("Pile") && this.isAlly(card)) {
            this.costReduce(10);
        }
    };

    useEffect = () => {
        this.owner().zone("Région").size += 1;
        this.owner().zone("Pile").size += 1;
        this.owner().zone("Inventaire").size += 1;
        this.owner().zone("Terrain").size += 1;

        this.move("Défausse");
        this.pose();
    };
}