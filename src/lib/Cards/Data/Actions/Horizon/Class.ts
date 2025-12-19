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
        if (this.zone.name == "Pile" && card.owner == this.owner) {
            this.costReduce(10);
        }
    };

    useEffect = () => {
        this.owner.zone("Région").size++;
        this.owner.zone("Pile").size++;
        this.owner.zone("Réserve").size++;
        this.owner.zone("Terrain").size++;

        this.move("Défausse");
        this.pose();
    };
}