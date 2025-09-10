import type { System } from '../../../../System/Class';
import { Action } from '../../../Class/Action';
import Text from './Text.svelte';

export class Defrichage extends Action {
    name = "Défrichage";

    constructor(system: System) {
        super(system);

        this.init([["Or", 60], ["Végétal", 60]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.zone("Pile").size++;
        this.owner.zone("Terrain").size++;

        this.owner.ressource("Or").current += this.owner.zone("Pile").size;
        this.owner.ressource("Végétal").current += this.owner.zone("Terrain").size;

        this.move("Défausse");
        this.pose();
    };
}