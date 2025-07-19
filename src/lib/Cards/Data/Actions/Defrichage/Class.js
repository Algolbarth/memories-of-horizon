import { Action } from '../Action';
import Text from './Text.svelte';

export class Defrichage extends Action {
    name = "Défrichage";

    constructor(system) {
        super(system);

        this.init([["Or", 60], ["Végétal", 60]]);

        this.text = Text;
    };

    useEffect = function () {
        this.owner.zone("Boutique").size++;
        this.owner.zone("Terrain").size++;

        this.owner.ressource("Or").current += this.owner.zone("Boutique").size;
        this.owner.ressource("Végétal").current += this.owner.zone("Terrain").size;

        this.move("Défausse");
        this.pose();
    };
}